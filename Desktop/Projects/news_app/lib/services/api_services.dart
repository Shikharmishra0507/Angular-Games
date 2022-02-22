import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/article.dart';

class ApiServices {
  final url = Uri.parse(
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9031a392b6464ad2a274039810d2e028");
  Future<List<Article>> getArticle() async {
    List<Article> articlesList = [];
    try {

      final res = await http.get(url);
      print(res.statusCode);
      if (res.statusCode == 200) {
        print("something");
        final responseData = json.decode(res.body);

        if (responseData['articles'] != null) {}
        responseData['articles'].forEach((art) {

          articlesList.add(Article.fromJson(art));
        });

        return articlesList;
      }
    } on Exception catch (e) {

      rethrow ;}
    print("something");
    return [];
  }
}
