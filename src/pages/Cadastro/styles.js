import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  containerLogo: {
    width: 200,
    height: 120,
  },
  logo: {
    width: "100%",
    height: "100%",
    marginTop: -15,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    color: "#202020",
    marginTop: -30,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    marginBottom: "10%",
  },
  containerWomanImage: {
    marginTop: -80,
    marginBottom: "10%",
    paddingTop: "3%",
  },
  btnLogIn: {
    backgroundColor: "#1372B8",
    width: 350,
    padding: 12,
    fontFamily: "Poppins_500Medium",
    borderRadius: 25,
    marginBottom: "5%",
    color: "#fff",
  },
  btnCadastro: {
    borderWidth: 2,
    borderColor: "black",

    width: 350,
    padding: 11,
    borderRadius: 25,
    marginBottom: "10%",
  },
  txtLogin: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Poppins_500Medium",
  },
  txtAdmin: {
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
  },
  womanImage: {
    width: 340,
    height: 340,
  },
});

export default styles;
