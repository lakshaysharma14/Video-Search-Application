import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

//It is easy to communicate from parent component to child component through props but
//when we communicate from child to parent component we need callback function


class App extends Component 
{
    state = 
    { 
        videos:[], 
        selectedVideo:null
    }

    componentDidMount()
    {
        this.onTermSubmit('Mern Stack');
    }

    onTermSubmit = async term =>
    {
       const res = await youtube.get('/search',{
          params:{
              q:term
          }  
        });

        this.setState({ 
            videos:res.data.items, 
            selectedVideo:res.data.items[0]
        });

    }

    onVideoSelect= (video) =>
    {
        this.setState( {selectedVideo:video} );
    }
//------------------------------------------------------------------------------------
    
    render()
    {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                
                <div className="ui grid">
                    <div className="ui row">
                    
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    
                    <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        {/* Communicating from child->child->Parent */}
                    </div>
                    
                    </div>
                </div>

            </div>
        );
    }
}

export default App;