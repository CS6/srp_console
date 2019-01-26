import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    FlatList,
    
} from 'react-native';

//引用插件
import Swiper from 'react-native-swiper';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class recommend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swiperShow: false,
            tips: ['Mono唯一推薦', '大貓豪惠吸', '48小时不打烊'],
            topic: [
                {
                    title: '小型會議空間 Private Meeting Room',
                    describe: ' 適合需要隱私的小組討論與教學，配備 SONY 4K 電視與音響、討論用白板等。',
                    price: ' $300/小時',
                },
                {
                    title: 'Daily UI 100天練習生進駐計劃 ',
                    describe: '可免費預約設計導師進行諮詢。 計畫詳情：https://medium.com/mo21',
                    price: ' $6990 /三個月',
                },
                {
                    title: 'Monospace',
                    describe: '擁有眺望大台中景觀的高樓視野',
                    price: ' $6990 /三個月',
                },
            ],
            special:[
                {title: '春宴 茶食礼盒 1.38千克', price: '168', describe:'定位高端,国际顶级品牌代工厂'},
                {title: '日本AKOYA天然海水珍珠18K金项链天然海水珍珠18K金项链', price: '999', describe:'定位高端,国际顶级品牌代工厂'},
                {title: '针织弹力女士短靴', price: '129', describe:'定位高端,国际顶级品牌代工厂'},
                {title: '怀抱休闲椅组合（皮款）', price: '1699', describe:'定位高端,国际顶级品牌代工厂'},
                {title: '针织弹力女士短靴', price: '168', describe:'定位高端,国际顶级品牌代工厂'},
                {title: '日本AKOYA天然海水珍珠18K金项链', price: '999', describe:'定位高端,国际顶级品牌代工厂'},
            ]
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                swiperShow: true,
            });
        }, 0)
    }

    // 轮播图
    renderBanner() {
        if (this.state.swiperShow) {
            return (
                <Swiper
                    style={styles.wrapper}
                    height={width * 40 / 75}
                    showsButtons={false}
                    autoplay={true}
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                >
                    <Image source={require('../../img/01.jpg')} style={styles.bannerImg} />
                    <Image source={require('../../img/02.jpg')} style={styles.bannerImg} />
                    <Image source={require('../../img/03.jpg')} style={styles.bannerImg} />
                    <Image source={require('../../img/04.jpg')} style={styles.bannerImg} />
                    <Image source={require('../../img/03.jpg')} style={styles.bannerImg} />
                </Swiper>
            )
        } else {
            return (
                <View style={{ height: width * 40 / 75 }}>
                    <Image source={require('../../img/4.jpg')} style={styles.bannerImg} />
                </View>
            );
        }
    }

    // 小标签
    renderTips() {
        let tip = this.state.tips
        return (
            <View style={styles.tips}>
                {
                    tip.map((item, index) => (
                        <View style={styles.tipItemBox} key={index}>
                            <Image source={require('../../img/yes.png')} style={styles.redyes} />
                            <Text style={styles.tipItem}>{item}</Text>
                        </View>
                    ))
                }
            </View>
        )
    }
    
    // 私人订制(一行三个)
    renderSpecial(){
        return (
            <View style={styles.moduleBox}>
                <Text style={styles.subtitle}>Monospace 共同工作空間</Text>
                <FlatList
                    data={this.state.special}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderSpecialItem}
                    numColumns={3}
                />
            </View>
        )
    }
    renderSpecialItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.specialItem}>
                <Image source={require('../../img/C.jpg')} style={styles.specialImg} />
                <View style={styles.specialContainer}>
                    <Text style={styles.specialTitle} numberOfLines={2}>{item.title}</Text>
                    <Text style={styles.specialPrice}>￥{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    // 专题精选（横向flatList）
    renderTopic() {
        return (
            <View style={styles.moduleBox}>
                <Text style={styles.subtitle}>共同夥伴</Text>
                <FlatList
                    data={this.state.topic}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderTopicItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
    renderTopicItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.topicItem}>
                <Image source={require('../../img/A.jpg')} style={styles.topicImg} />
                <View style={styles.topicContainer}>
                    <View style={styles.topicText}>
                        <Text style={styles.topicTitle}>{item.title}</Text>
                        <Text style={styles.topicDesc}>{item.describe}</Text>
                    </View>
                    <Text style={styles.topicPrice}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    // 猜你喜欢(一行两个)
    renderLike(){
        return (
            <View style={styles.moduleBox}>
                <Text style={styles.subtitle}>元惠吸貓小組</Text>
                <FlatList
                    data={this.state.special}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderLikeItem}
                    numColumns={2}
                />
            </View>
        )
    }
    renderLikeItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.likeItem}>
                <Image source={require('../../img/goods.png')} style={styles.likeImg} />
                <Text style={styles.likeDesc} numberOfLines={1}>{item.describe}</Text>
                <View style={styles.likeContainer}>
                    <Text style={styles.likeTitle} numberOfLines={2}>{item.title}</Text>
                    <Text style={styles.likePrice}>￥{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
                {this.renderBanner()}
                {this.renderTips()}
                {this.renderSpecial()}
                {this.renderTopic()}
                {this.renderLike()}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#efefef',
    },
    bannerImg: {
        height: width * 40 / 75,
        width: width,
    },
    wrapper: {
        width: width,
    },
    paginationStyle: {
        bottom: 6,
    },
    dotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        opacity: 0.4,
        borderRadius: 0,
    },
    activeDotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        borderRadius: 0,
    },
    tips: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-around',
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tipItemBox: {
        flexDirection: 'row',
    },
    redyes: {
        width: 16,
        height: 16,
        marginRight: 5,
    },
    tipItem: {
        fontSize: 14,
        color: '#333',
    },
    moduleBox: {
        width: width,
        alignItems:'center',
        backgroundColor: '#fff',
        paddingBottom:10,
        marginBottom:10,
    },
    subtitle:{
        fontSize:16,
        color:'#666',
        padding:15,
    },
    topicItem: {
        width: width*0.7,
        marginLeft:15,
    },
    topicImg: {
        width: width*0.7,
        height: width*0.4,
        borderWidth:0.5,
        borderColor:'#cdcdcd',
        borderRadius:2,
    },
    topicContainer:{
        flexDirection: "column",
        justifyContent:'space-between',
        marginTop:10,
    },
    topicTitle:{
        fontSize:16,
        color:'#666',
    },
    topicDesc:{
        fontSize:13,
        color:'#999',
        marginTop:3,
    },
    topicPrice:{
        fontSize:14,
        color:'#b4282d',
    },
    specialItem:{
        width:width/3 -12,
        marginLeft:4,
        marginRight:5,
        marginBottom:15,
    },
    specialImg:{
        width:width/3 -12,
        height:width/3 -12,
        backgroundColor:'#f4f4f4'
    },
    specialTitle:{
        fontSize:14,
        color:'#666',
        marginTop:8,
        marginBottom:4,
    },
    specialPrice:{
        fontSize:14,
        color:'#b4282d',
    },
    likeItem:{
        width:width/2 -15,
        marginLeft:5,
        marginRight:5,
        marginBottom:15,
    },
    likeImg:{
        width:width/2 -15,
        height:width/2 -15,
        backgroundColor:'#f4f4f4'
    },
    likeDesc:{
        backgroundColor:'#F1ECE2',
        color:'#9F8A60',
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:4,
        paddingRight:4,
    },
    likeTitle:{
        fontSize:14,
        color:'#666',
        marginTop:8,
        marginBottom:4,
    },
    likePrice:{
        fontSize:14,
        color:'#b4282d',
    }
});