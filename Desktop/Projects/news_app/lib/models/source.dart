import 'package:flutter/material.dart';

class Source {
  String? id;
  String? name;

  Source({this.name, this.id});

  factory Source.fromJson(Map<String, dynamic> json) {
    return Source(
        id: json['id'],
        name: json['name']
    );
  }
}
