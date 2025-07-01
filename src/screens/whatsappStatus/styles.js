import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    paddingHorizontal: 10,
  },

  headerText: {
    fontSize: 40,
    fontWeight: "bold",
     
  },

  statusListing: {
  },

  statusListingHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  headerIcon:{
    backgroundColor:"#f6f5f4",
    height:40,
    width:40,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"bold",
 
  },

  headerSubIconContainer: {
    flexDirection: "row",
    gap: 10,
     
  },

  headerSubText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  statusContainer: {
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
    backgroundColor: "#f0f0f0",
    height: 150,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    marginRight: 10,
  }
});