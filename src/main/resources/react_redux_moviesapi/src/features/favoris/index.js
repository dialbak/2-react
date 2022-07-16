import React from 'react';
import {FavoriList} from './components';
import Loading from '../../components/utils/Loading';
import {connect} from 'react-redux';
import {favorisIsLoadingSelector, favorisListSelector} from '../../store/selectors';
import {tryRemoveFavori} from '../../store/actions';


const Favoris = (props) => {
    return (
        <div className="d-flex flex-row flex-fill pt-4 p-2">

            {props.isLoading ? (
                <Loading/>
            ) : (
                <div className="d-flex flex-row flex-fill pt-4 p-2">
                    <FavoriList
                        favoris={props.favoris}
                        removeFavori={props.tryRemoveFavori}
                    />
                </div>
            )}
        </div>
    )
}

/**
 * - The connect() function allows you to read the values in your state and read them back when they update.
 * - mapStateToProps which is called every time the state changes
 * - It receives all the state and must return a data object containing what the presentation component needs.
 * thanks to the selector
 * _ mapDispatchToProps allows to create functions that use dispatch when called and to pass these functions as props to your components.
 */
export default connect(state => ({
    favoris: favorisListSelector(state),
    isLoading: favorisIsLoadingSelector(state)
}), {
    tryRemoveFavori
})(Favoris);
