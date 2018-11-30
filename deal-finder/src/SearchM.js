import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import source from './source';



export default class SearchM extends Component {
  favs = JSON.parse(localStorage.getItem("favs"));
  componentWillMount() {
    this.resetComponent()
  }

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ 
      open: true,
    });
  };

  handleVisit = () => {
    window.open(this.state.visitURL,'_blank');
    this.setState({ open: false });
  };

  setFav = () => {
    if(this.favs == null){
      this.favs = []
    }
    this.favs.push(this.state.item);
    console.log(this.state);
    localStorage.setItem("favs", JSON.stringify(this.favs));
    alert("Product saved to favs list");
    this.setState({ open: false });
  };

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => {
    this.setState({ item: result, value: result.title, visitURL: result.link });
    this.handleClickOpen(result);
  }
  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
         <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.state.value}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You can either purchase this item or save it to your favorites for later.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.setFav} color="primary">
              Favorite
            </Button>
            <Button onClick={this.handleVisit} color="primary" autoFocus>
              Visit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
        {/* <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.state, null, 2)}</pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(source, null, 2)}</pre>
          </Segment>
        </Grid.Column> */}
      </Grid>
    )
  }
}