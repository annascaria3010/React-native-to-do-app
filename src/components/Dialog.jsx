import { View } from "react-native";

export default function Dialog(message) {
return(
    <View style={{
        position:"fixed",
        top:"0",
        left:"0",
        right:"0",
        bottom:"0",
        backgroundColor:"rgba(0,0,0,0.5)"
    }}>
        <View style={{
            alignItems:"center",
            justifyContent:"center",
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)",
            background:"white",
            padding:"50px"
        }}>

            <h3>{message}</h3>
            <View style={{
                alignItems:"center",
            }}>
                <button style={{background:"red",color:"white"}}>Yes</button>
                <button style={{background:"green",color:"white"}}>No</button>
            </View>
        </View>
    </View>
)

}