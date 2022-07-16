import React, {Component} from 'react';
import styled from "styled-components"

export default class FavoriElement extends Component {
    render() {
        const {favori} = this.props;
        return (
            <Container className={"d-flex flex-row bg-light "}>
                <img alt="film" width="185" src={favori.img}/>
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{favori.title}</h5>
                    <hr className="w-100"/>
                    <p className="flex-fill">{favori.details}</p>
                    <div className="d-flex flex-row justify-content-end">
                        <button onClick={this.props.removeFavori} className="btn btn-small btn-danger">Remove</button>
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
  margin:0px 5px 10px 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s;
}
`
