
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 30,
        textAlign:'center',
        marginTop:20
    },
    botao: {
        backgroundColor: '#ccc',
        marginTop: 20,
        width:Dimensions.get('window').width-20,
        marginLeft: 10,
        marginRight: 10,
    },
    textoBotao:{
        fontSize:25,
        textAlign:'center'
    },
    input: {
        width: Dimensions.get('window').width-20,
        height:40,
        borderColor:'#000',
        borderWidth: 1,
        marginLeft:10,
        marginRight:10,
        fontSize: 20,
    }
})