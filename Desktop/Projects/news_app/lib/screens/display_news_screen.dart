 import 'package:flutter/material.dart';
import 'package:news_app/services/api_services.dart';
import '../models/article.dart';
import '../widgets/news_card.dart';
class DisplayNewsScreen extends StatefulWidget {


  @override
  _DisplayNewsScreenState createState() => _DisplayNewsScreenState();
}

class _DisplayNewsScreenState extends State<DisplayNewsScreen> {
  ApiServices client=ApiServices();
  @override
  Widget build(BuildContext context) {
    return FutureBuilder <List<Article>> (

      future:client.getArticle(),
      builder:
          (BuildContext ctx,
          AsyncSnapshot <List<Article>>snapshot){
        if(snapshot.connectionState==ConnectionState.waiting){
          return const CircularProgressIndicator();
        }
        if(snapshot.error!=null){
          const Center(child: Text("error"));
        }
        List<Article>?articles=snapshot.data;

        return

        Scaffold(
          appBar: AppBar(),
            body: articles==null || articles.isEmpty? Text("No News!!"):
            ListView.separated(
               separatorBuilder: (context, index) => Divider(
          color: Colors.black,
        ),
              itemBuilder:(BuildContext ctx,int index){
              return NewsCard(articles[index]);
        },itemCount: articles.length,)
            );

      } ,);
  }
}
