
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("profile/<str:username>", views.profile, name="profile"),

    # API endpoints
    path("api/posts", views.all_posts, name="all_posts"),
    path("api/posts/<int:post_id>/like", views.like, name="like"),
    path("api/posts/<int:post_id>/edit", views.edit, name="edit"),
    path("api/profile/<str:username>", views.get_profile, name="get_profile"),
    path("api/posts/<str:username>", views.get_user_posts, name="get_user_posts"),

    path("api/profile/<str:username>/follow", views.follow, name="follow"),
]
