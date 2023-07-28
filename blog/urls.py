from django.urls import path 
from .views import BlogPostDetailView,BlogPostListCreateView,CommentDetailView,CommentListCreateView

urlpatterns = [
    path('blog/', BlogPostListCreateView.as_view(), name='blog-list-create'),
    path('blog/<int:pk>/', BlogPostDetailView.as_view(), name='blog-detail'),
    path('comments/', CommentListCreateView.as_view(), name='comment-list-create'),
    path('comments/<int:pk>/', CommentDetailView.as_view(), name='comment-detail'),
]