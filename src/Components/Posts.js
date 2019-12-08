import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='row col-md-10 mb-10'>
      {/* <div className="row"> */}
      {posts.map(post => (
        // <li key={post.engineerid} className='list-group-item'>
        //   {post.name},skill :{post.skill}
        // </li>
        <div className="container my-1 py-2 text-left">
          <div className="card-body  ml-1 mt-2" >
            <div className="card" style={{ width: '15rem' }}>
              <img width="400" height="200" src={`http://localhost:5000/image/` + post.foto} className="card-img-top" alt="..." />
              <h4 className="text-center">{post.name}</h4>
              <h6 className="card-text">Skill: {post.skill}</h6>
              <h6 className="card-text">{post.description}</h6>
              <h6 className="text-center">{post.showcase}</h6><br></br>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Detail</button>
            </div>
          </div>
        </div>
      ))}
      {/* </div> */}
    </ul>

  );
};

export default Posts;
