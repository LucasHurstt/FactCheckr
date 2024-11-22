import { StyleSheet } from 'react-native';

const sharedCardStyle = {
  backgroundColor: '#2b2b2b',
  borderRadius: 12,
  padding: 16,
  width: '100%',
  maxWidth: 400,
};

const sharedTextStyle = {
  color: '#d0d0d0',
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#bc2c2c',
  },
  header: {
    width: '100%',
    backgroundColor: '#bc2c2c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '80%',
    height: 50,
    resizeMode: 'contain',
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b2b2b',
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    width: '100%',
    maxWidth: 400,
    marginTop: 20,
    marginBottom: 30,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    ...sharedTextStyle,
    fontSize: 16,
    paddingVertical: 10,
  },
  card: {
    ...sharedCardStyle,
  },
  factCheckHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  factCheckText: {
    ...sharedTextStyle,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultIconInline: {
    width: 20,
    height: 20,
  },
  responseBox: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  responseText: {
    ...sharedTextStyle,
  },
  sourceToggle: {
    paddingVertical: 10,
  },
  sourceToggleText: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
  sourcesContainer: {
    marginTop: 10,
  },
  sourceLink: {
    color: '#1e90ff',
    marginBottom: 5,
  },
  profileCard: {
    ...sharedCardStyle,
    marginTop: 25,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 15,
  },
  privacyPolicyText: {
    color: '#1e90ff',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  authHeaderText: {
    ...sharedTextStyle,
    fontSize: 24,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 25,
    textAlign: 'center',
  },
  authContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
  },
  authBlock: {
    ...sharedCardStyle,
    marginTop: 25,
  },
  authInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#444',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#2b2b2b',
    ...sharedTextStyle,
  },
  error: {
    color: '#bc2c2c',
    marginBottom: 15,
  },
  authButton: {
    backgroundColor: '#bc2c2c',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
    margin: 5,
    alignSelf: 'center',
  },
  authButtonText: {
    color: '#d0d0d0',
  },
  authORText: {
    color: '#1e90ff',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  loginRedirect: {
    marginTop: 20,
  },
  loginRedirectText: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
  signupRedirectText: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
});

export default styles;