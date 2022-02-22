import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../models/article.dart';
class NewsCard extends StatefulWidget {
  Article article;
  NewsCard(this.article);

  @override
  State<NewsCard> createState() => _NewsCardState();
}

class _NewsCardState extends State<NewsCard> {
  bool expand=false;
  @override
  Widget build(BuildContext context) {
    return Container(
      child:Column(
        children: [
          Row(children: [
            Container(
              height:MediaQuery.of(context).size.height*0.4,
              width: MediaQuery.of(context).size.width*0.6,

              child:Column(

                children: [
                //title
                Flexible(
                  fit: FlexFit.tight,
                    flex: 3,
                    child:widget.article.title == null ? Text("Nothing"):  Text(widget.article.title!,style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold),)),
                //description
                Flexible(
                  fit:FlexFit.loose,
                  flex: 6,
                    child:widget.article.description == null ? Text("Nothing"): Text(widget.article.description!)),
                Flexible(
                  fit: FlexFit.tight,
                  flex: 1,
                  child: Row(

                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      TextButton(onPressed: (){

                      }, child: Text("Visit Website")),
                      TextButton(onPressed: (){
                        setState(() {
                          expand=!expand;
                        });
                      }, child: Text("Read More")),
                    ],
                  ),
                )
              ],)
            ),
            Container(
              height: MediaQuery.of(context).size.height*0.4,
                width: MediaQuery.of(context).size.width*0.3,
                decoration: BoxDecoration(image: widget.article.urlToImage!=null  ?
    DecorationImage(image: NetworkImage(widget.article.urlToImage!))  :
                DecorationImage(image:AssetImage("/assets/image"))))

          ],),
          if(expand)Container( height:MediaQuery.of(context).size.height*0.3, child: Flexible( fit:FlexFit.loose , child: Container(child:Text(widget.article.content!))))
        ],
      )
    );
  }
}
