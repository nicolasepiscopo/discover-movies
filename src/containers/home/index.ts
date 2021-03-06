import { connect } from 'react-redux'

import Home from '../../pages/home'
import { bindActionCreators } from 'redux'
import { moviesActions } from '../../state'

const mapStateToProps = ({ movies }) => ({ movies })
const mapDispatchToProps = dispatch => ({
    moviesActions: bindActionCreators(moviesActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
