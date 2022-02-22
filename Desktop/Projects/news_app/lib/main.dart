import 'package:flutter/material.dart';
import 'package:news_app/services/api_services.dart';
import '/screens/display_news_screen.dart';
import './models/article.dart';
void main() {
  runApp( MyApp());
}

class MyApp extends StatelessWidget {
   MyApp({Key? key}) : super(key: key);

  ApiServices client=ApiServices();
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(

        primarySwatch: Colors.blue,
      ),
      home:DisplayNewsScreen(),
    );
  }
}

