import { connect } from 'react-redux'

import Movie from '../../pages/movie'
import { bindActionCreators } from 'redux'
import { moviesActions } from '../../state'

const mapStateToProps = ({ movies }) => ({ movies })
const mapDispatchToProps = dispatch => ({
    moviesActions: bindActionCreators(moviesActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
