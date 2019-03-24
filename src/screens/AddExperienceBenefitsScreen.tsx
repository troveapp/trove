import React from "react";
import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import {connect} from "react-redux";
import {AppState} from "../redux/Store";

interface State {
  benefits: Array<string>;
}

function mapStateToProps(state: AppState) {
  return state.core;
}

interface PreviousState {
  resourceId: string;
}

class AddExperienceBenefitsScreen extends React.Component<
  NavigationScreenProps<PreviousState> & ReturnType<typeof mapStateToProps>,
  State
> {
  static navigationOptions = {
    header: null,
  };

  state = {
    benefits: [],
  };

  handleDone = () => {
    this.props.navigation.navigate("AddExperienceHowEmpowering", {
      resourceId: this.props.navigation.getParam("resourceId"),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text>What were the benefits?</Text>
            <Button title="Done" onPress={this.handleDone} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});

export default connect(mapStateToProps)(AddExperienceBenefitsScreen);