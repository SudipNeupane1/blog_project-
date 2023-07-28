from rest_framework import serializers
from .models import BlogPost, Comment 


class CommentSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Comment 
        fields = ('id','content','created_at','author', 'post')



class BlogPostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = BlogPost
        fields = ('id','title','content','created_at','updated_at',
                  'author','comments')
        