import { SafeAreaView, View, Text ,StyleSheet, StatusBar} from "react-native";
import { Feather } from '@expo/vector-icons';
const CurrentWeather = () => {
    const {container , wrapper, temp, feels, highlowWrapper, bodyWrapper,highLow, message, description} = style
    return ( 
        <SafeAreaView style={wrapper} >
            <View style={container }>
            <Feather name="sun" size={100} color="black" />
                    <Text style={temp}>6</Text>
                    <Text style={feels}>Feels like 5</Text>
                <View style ={highlowWrapper}>
                    <Text style={highLow}>High: 8</Text>
                    <Text style={highLow}>Low: 6</Text>
               </View>
            </View>
                <View style={bodyWrapper}>
                    <Text style={description}>It is sunny</Text>
                    <Text style={message}>Perfect T-shirt Day</Text>
                </View>
        </SafeAreaView>
     );
}
 const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        padding: StatusBar.currentHeight || 0,
        justifyContent:'center'
    },
    wrapper: {
        flex: 1,
        backgroundColor: 'pink'
    },
    temp:{
        fontSize:48,
        color:'black'
    },
    feels:{
        fontSize:38
    },
    highlowWrapper:{
        flexDirection:'row',
       

    },
    highLow:{
        fontSize:20
    },
    bodyWrapper:{
        justifyContent:'flex-end',
        alignItems:'flex-start',
        paddingLeft:25,
        marginBottom:40
    },
    description:{
        fontSize:48
    },
    message:{
        fontSize:30
    }

 })
export default CurrentWeather;