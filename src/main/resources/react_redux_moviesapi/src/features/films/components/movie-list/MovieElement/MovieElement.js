import React, {Component} from 'react';
import styled from "styled-components"

export default class MovieElement extends Component {


    mouseEnter = () => {
        this.props.updateSelectedMovie(this.props.movie.title);
    }

    render() {
        return (
            <Container onClick={this.mouseEnter} className={"d-flex flex-row bg-light "}>
                <img alt="film" width="185" src={this.props.movie.img}/>
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{this.props.movie.title}</h5>
                    <hr className="w-100"/>
                    <p className="flex-fill">{this.props.movie.details}</p>
                    <div className="d-flex flex-row justify-content-end">
                        {this.props.isFavori ? (
                            <button onClick={() => {
                                this.props.removeFavori(this.props.movie.title)
                            }} className="btn btn-small btn-danger">Retirer</button>
                        ) : (
                            <button onClick={() => {
                                this.props.addFavori(this.props.movie)
                            }} className="btn btn-small btn-primary">Ajouter</button>
                        )}
                    </div>
                </div>
            </Container>
        );
    }
}

const Container = styled.div`
  width: 480px;
  height: 280px;
  overflow: hidden;
  margin: 0px 5px 10px 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s;
  }`