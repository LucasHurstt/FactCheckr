import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles/styles';

const trueIcon = require('../../assets/true.png');
const falseIcon = require('../../assets/false.png');
const cautionIcon = require('../../assets/caution.png');

const FactCheckCard = ({ response, sources, showSources, setShowSources }) => {
  const getStatusIcon = () => {
    const lowerResponse = response.toLowerCase();
    if (lowerResponse.includes('true')) return trueIcon;
    if (lowerResponse.includes('false')) return falseIcon;
    return cautionIcon;
  };

  return (
    <View style={styles.card}>
      <View style={styles.factCheckHeader}>
        <Text style={styles.factCheckText}>Fact Check:</Text>
        <Image source={getStatusIcon()} style={styles.resultIconInline} />
      </View>
      <View style={styles.responseBox}>
        <Text style={styles.responseText}>{response}</Text>
      </View>
      {sources.length > 0 && (
        <TouchableOpacity onPress={() => setShowSources(!showSources)} style={styles.sourceToggle}>
          <Text style={styles.sourceToggleText}>
            {showSources ? 'Hide Sources' : 'Show Sources'}
          </Text>
        </TouchableOpacity>
      )}
      {showSources && (
        <View style={styles.sourcesContainer}>
          {sources.map((source, index) => (
            <Text
              key={index}
              style={styles.sourceLink}
              onPress={() => Linking.openURL(source.url)}
            >
              {source.name}: {source.url}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default FactCheckCard;