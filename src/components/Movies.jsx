import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends React.Component {
    state = {
        movie: getMovies()
    }

    handleDelete = movie => {
        const movies = this.state.movie.filter(m => m._id !== movie._id);
        this.setState({ movie: movies }); 
    };

    render() { 
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movie.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td> <button onClick={() => this.handleDelete(movie)} className='btn btn-danger btn-sm'
                                >
                                    Delete

                                </button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        ); 
    }
}
 
export default Movies;