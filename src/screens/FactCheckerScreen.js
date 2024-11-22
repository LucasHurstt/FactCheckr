import React, { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { getWebResults } from '../api/bing';
import { analyzeContentUsingGPT } from '../api/openai';
import FactCheckCard from '../components/FactCheckCard';
import styles from '../styles/styles';

const FactCheckerScreen = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [sources, setSources] = useState([]);
  const [showSources, setShowSources] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse('');
    setSources([]);
    setShowSources(false);

    try {
      const { articles } = await getWebResults(query);
      const { summary, sources } = await analyzeContentUsingGPT(articles, query);
      setResponse(summary);
      setSources(sources);
    } finally {
      setLoading(false);
      Keyboard.dismiss();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/banner.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.centeredContainer}>
          <View style={styles.searchContainer}>
            <Icon
              name="search"
              size={24}
              color="#cfcfcf"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter a statement to fact check..."
              placeholderTextColor="#d0d0d0"
              value={query}
              onChangeText={setQuery}
              onSubmitEditing={handleSearch}
              returnKeyType="search"
              keyboardAppearance="dark"
            />
          </View>
          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#bc2c2c" />
            </View>
          )}
          {!loading && response && (
            <FactCheckCard
              response={response}
              sources={sources}
              showSources={showSources}
              setShowSources={setShowSources}
            />
          )}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default FactCheckerScreen;