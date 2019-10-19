import React, { Component } from 'react';

import Categories from './Categories';
import { posts, categories, AllCategory } from '../store';

class Posts extends Component {

  constructor() {
    super();

    this.state = {
      categories: categories,
      posts: posts,
      category: AllCategory
    };
  }

  handleCategorySelect = (category) => {
    // DONT DO THIS
    // this.state.category = category;

    this.setState({ category: category });
  }

  handlePostCreate = (newPost) => {
    this.setState((prevState) => {
      return {
        posts: [...prevState.posts, newPost]
      };
    });
  }

  handlePostDelete = (id) => {
    this.setState((prevState) => {
      return {
        posts: prevState.posts.filter(p => p.id !== id)
      };
    });
  }

  getCategoryName(categoryId) {
    const { categories } = this.state;
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  }

  renderPosts(posts) {
    return <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(p => <tr key={p.id}>
          <td>{p.title}</td>
          <td>{p.author}</td>
          <td>{this.getCategoryName(p.category)}</td>
          <td>
            <div className="btn-group btn-group-sm">
              <a className="btn btn-info" href="/">View</a>
              <a className="btn btn-warning" href="/">Edit</a>
              <a className="btn btn-danger" href="/">Delete</a>
            </div>
          </td>
        </tr>
        )}
      </tbody>
    </table>;
  }

  render() {
    const { category, posts, categories } = this.state;

    const filteredPosts = category.id === 'all'
      ? posts
      : posts.filter(p => {
        return p.category === category.id;
      })

    return <div className="row">
      <div className="col-12 col-md-3">
        <Categories
          categories={categories}
          onCategorySelect={this.handleCategorySelect}
        />
      </div>
      <div className="col-12 col-md-9">
        <h5>Posts</h5>

        {filteredPosts.length > 0
          ? (this.renderPosts(filteredPosts))
          : (<div className="alert alert-info" role="alert">
            No posts for this category
          </div>)
        }
      </div>
    </div>;
  }

}

export default Posts;


