import React from 'react';
import { View, Text, SafeAreaView , StyleSheet, StatusBar, FlatList, ImageBackground} from 'react-native';
import { Feather} from '@expo/vector-icons'

const UpcomingWeather = () => {
    const { container, item, image } = style

    const DATA = [
        {
            dt_txt:"2023-02-19 12:08:08",
            main:{
                temp_max:8.55,
                temp_min:7.55
            },
            weather:[
                {
                    main:"Clear"
                }
            ]
        },
        {
            dt_txt:"2023-02-12 12:08:08",
            main:{
                temp_max:8.55,
                temp_min:7.55
            },
            weather:[
                {
                    main:"Clouds"
                }
            ] 
        },
        {   dt_txt:"2023-02-15 12:08:08",
            main:{
                temp_max:8.55,
                temp_min:7.55
            },
            weather:[
                {
                    main:"Rain"
                }
            ]
        }
    ]

    const Item = ({dt_txt, min, max, condition}) => 
        (
         <View style={item}>
            <Feather name='sun' size={40} color='white' />
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>
        </View>
        )
    
    const renderItem = ({item}) => 
        (
            <Item 
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            max={item.main.temp_max}
            min={item.main.temp_min}
            />
        )
    
    return ( 
        <SafeAreaView style={container}>
            
             <View>
                <Text>Upcoming Weather</Text>
                <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
                />
             </View>
           
        </SafeAreaView>
     );
}
 const style = StyleSheet.create({
    container:{
        flex:1,
        padding:StatusBar.currentHeight||0,
        backgroundColor:'wheat'   
    },
    item:{
        marginHorizontal:1,
        marginVertical:10,
        justifyContent:'space-around',
        alignItems:'center',
        padding:10,
        flexDirection:'row',
        borderWidth:2,
        backgroundColor:'pink'
    },
    image:{
       flex:1,
       resizeMode:'cover',
   
    }
 })
export default UpcomingWeather;