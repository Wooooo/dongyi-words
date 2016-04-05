require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

const AppComponent = React.createClass({
    render(){

        var words = [
            '난 많이 먹는 편이 아니라 그냥 자주먹는거임', //오후 10시 25분
            '난 다이어트같은 가식은 부리지않는다'
        ];

        return (
            <div className="index container">
                <div className="row">

                    <div className="col-lg-6 col-lg-offset-3">
                        <h1 className="display-3">
                            갓동이님 어록집
                        </h1>

                            {
                                (()=>{
                                    return words.map(function(word){
                                        return (
                                                <blockquote className="blockquote">
                                                    {word}
                                                    <footer className="blockquote-footer">
                                                        <cite title="김동이">김동이</cite>
                                                    </footer>
                                                </blockquote>
                                        );
                                    })
                                })()
                            }
                    </div>
                </div>
            </div>
        )
    }
})
export default AppComponent;
