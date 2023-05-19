import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Logo from "../assets/icon.png";

const Login = () => {
  const initial = {
    email: "",
    password: "",
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={Logo} />
      </View>

      <View>
        <Text style={styles.welcome}>Welcome Back!</Text>
      </View>
      <View>
        <Text style={styles.account}>Login to your account</Text>
      </View>

      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#146f94"  ></TextInput>

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#146f94"
        secureTextEntry={true}
        
      />

      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.marginTopAndBottom}>
        <Text style={styles.signWith}>
          ----------- <Text style={{color:"#fff"}}>Or sign in with</Text>-----------
        </Text>
      </View>
      <View style={styles.Social}>
      <TouchableOpacity style={styles.buttonSocial}>
        <Text style={styles.buttonText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSocial}>
        <Text style={styles.buttonText}>Facebook</Text>
      </TouchableOpacity>
      </View>
      
      <View style={styles.size}>
        <Text style={styles.back}>
          Don't have an account? <Text style={styles.sign}>Sign up here</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#112342",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 50,
  },
  logo: {
    height: 106,
    width: 280,
    top: 50,
  },
  welcome: {
    fontSize: 35,
    color: "#fff",
    marginTop: 100,
  },
  account: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
  },
  registration: {
    fontSize: 25,
    color: "#fff",
    marginTop: 100,
    textAlign: "center",

    color: "#146e93",
  },
  verify: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    color: "#146e93",
  },
  size: { alignSelf:"flex-end"},
  back: {
    fontSize: 15,
    color: "#146e93",
    fontSize: 18,
  },
  sign: {
    color: "#fff",
  },
  forgotPasswordButton: {
    width: "100%",
    textAlign: "flex-end",
    padding: 10,
  },
  forgotPasswordButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "right",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "100%",
    color:"#fff",
    fontSize:"bold",
    fontWeight:"900",
    backgroundColor:"#383e5e"
  },
  button: {
    backgroundColor: "#2ec1e7",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: "40%",
    alignItems: "center",
   
  },
  buttonSocial: {
    backgroundColor: "#2ec1e7",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
   
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  createAccountButton: {
    marginTop: 20,
  },
  createAccountButtonText: {
    color: "#20B2AA",
    fontSize: 12,
    fontWeight: "bold",
  },
  marginTopAndBottom:{
    marginTop:80,
  },
  signWith:{fontSize:20,
    color:"#2ec1e7"
  },
  Social:{display:"flex",
    paddingBottom:10,
    paddingTop:10,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
    
  }
  // inputContainer: {
  //   borderBottomColor: '#F5FCFF',
  //   backgroundColor: '#FFFFFF',
  //   borderRadius: 30,
  //   borderBottomWidth: 1,
  //   width: 250,
  //   height: 45,
  //   marginBottom: 15,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // inputs: {
  //   height: 45,
  //   marginLeft: 16,
  //   borderBottomColor: '#FFFFFF',
  //   flex: 1,
  // },
  // icon: {
  //   width: 30,
  //   height: 30,
  // },
  // inputIcon: {
  //   marginLeft: 15,
  //   justifyContent: 'center',
  // },
  // buttonContainer: {
  //   height: 45,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: 20,
  //   width: 250,
  //   borderRadius: 30,
  // },
  // loginButton: {
  //   backgroundColor: '#3498db',
  // },
  // fabookButton: {
  //   backgroundColor: '#3b5998',
  // },
  // googleButton: {
  //   backgroundColor: '#ff0000',
  // },
  // loginText: {
  //   color: 'white',
  // },
  // restoreButtonContainer: {
  //   width: 250,
  //   marginBottom: 15,
  //   alignItems: 'flex-end',
  // },
  // socialButtonContent: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // socialIcon: {
  //   color: '#FFFFFF',
  //   marginRight: 5,
  // },
});

export default Login;
