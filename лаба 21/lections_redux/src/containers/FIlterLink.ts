    import { connect, ConnectedProps } from 'react-redux';
    import { Dispatch } from 'redux';
    import { setVisibilityFilter, VisibilityFilters } from '../actions';
    import Link, { LinkProp } from '../components/Link';
    import { RootState} from "@reduxjs/toolkit/query";
    
    const mapStateToProps = (state: RootState<any,any,any>, ownProps: LinkProp) => ({
        active: ownProps.filter === state.visibilityFilter,
    });
    
    const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: LinkProp) => ({
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
    });
    
    const connector = connect(mapStateToProps, mapDispatchToProps);
    type PropsFromRedux = ConnectedProps<typeof connector>;
    
    const ConnectedLink = connector(Link);
    export default ConnectedLink;