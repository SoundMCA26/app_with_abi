import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { WebView } from "react-native-webview";

// Import local images
const images = [
  { id: 1, src: require("./assets/harry.jpg"), label: "Harry" },
  { id: 2, src: require("./assets/tay.jpg"), label: "Taylor" },
  { id: 3, src: require("./assets/wife.jpg"), label: "Wife" },
  { id: 4, src: require("./assets/hip.jpeg"), label: "Hip" },
  { id: 5, src: require("./assets/ani.jpeg"), label: "Anirudh" },
];

// Import background image from local assets
const backgroundImage = require("./assets/background.png");

const HomeScreen = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Abi oru loosu</Text>

        {/* Horizontal Scrollable Image Buttons */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
          {images.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => Alert.alert("Clicked", item.label)} style={styles.imageButton}>
              <Image source={item.src} style={styles.image} />
              <Text style={styles.imageLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Spotify Embed Below Image Buttons */}
        <View style={styles.spotifyContainer}>
          <WebView 
            source={{ html: `
              <html>
                <head>
                  <style>
                    body {
                      margin: 0;
                      padding: 0;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      height: 100vh;
                      background: transparent;
                    }
                    iframe {
                      width: 100%;
                      height: 100%;
                    }
                  </style>
                </head>
                <body>
                  <iframe style="border-radius:12px" 
                    src="https://open.spotify.com/embed/playlist/6f75KhaYbUACYAIef6qZZx?utm_source=generator" 
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                  </iframe>
                </body>
              </html>
            `}} 
            style={styles.webview}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  scrollContainer: {
    marginTop: 20,
  },
  imageButton: {
    alignItems: "center",
    marginRight: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  imageLabel: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  spotifyContainer: {
    marginTop: 20,
    width: "90%",
    height: 80, // Fixed height to remove extra space
    borderRadius: 12,
    overflow: "hidden",
  },
  webview: {
    width: "100%",
    height: "100%",
  },
});
