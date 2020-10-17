//i18n => {"header.header.Text.1":"yinsure.finance","header.header.Text.2":"\n                Connect your wallet\n              "}
import i18next from "i18next";
import {getI18n} from "react-i18next";
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
	Typography
} from '@material-ui/core';
import { withRouter } from "react-router-dom";
import { colors } from '../../theme';

import {
	CONNECTION_CONNECTED,
	CONNECTION_DISCONNECTED,
} from '../../constants';

import UnlockModal from '../unlock/unlockModal.jsx';

import Store from "../../stores";
import {i18nKeys} from "../../i18n";
const emitter = Store.emitter;
const store = Store.store;

const logoImgHeader = require('../../assets/logo/ARIES FINANCIAL LONG LOGO.1(Gold).png');

const styles = theme => ({
	languages: {
		margin: "0 20px",
	},
	root: {
		verticalAlign: 'top',
		width: '100%',
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			marginBottom: '40px'
		}
	},
	headerV2: {
		background: colors.white,
		border: '1px solid '+colors.borderBlue,
		borderTop: 'none',
		width: '100%',
		borderRadius: '0px 0px 50px 50px',
		display: 'flex',
		padding: '24px 32px',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'space-between',
			padding: '16px 24px'
		}
	},
	icon: {
		alignItems: 'center',
		cursor: 'pointer',
		flex: 1,
		display: "flex",
	},
	linksContainer: {
		textAlign: "center",
	},
	links: {
		display: "flex",
	},
	link: {
		margin: "0px 10px",
		paddingBottom: "5px",
		textAlign: "center",
		cursor: 'pointer',
		'&:hover': {
			borderBottom: "3px solid "+colors.borderBlue,
		},
	},
	linkActive: {
		borderBottom: "3px solid "+colors.borderBlue,
	},
	title: {
		textTransform: 'capitalize'
	},
	account: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		[theme.breakpoints.down('sm')]: {
			flex: '0'
		}
	},
	walletAddress: {
		padding: '12px',
		border: '2px solid rgb(174, 174, 174)',
		borderRadius: '50px',
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		'&:hover': {
			border: "2px solid "+colors.borderBlue,
			background: 'rgba(47, 128, 237, 0.1)'
		},
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			position: 'absolute',
			top: '90px',
			border: "1px solid "+colors.borderBlue,
			background: colors.white
		}
	},
	walletTitle: {
		flex: 1,
		color: colors.darkGray
	},
	connectedDot: {
		background: colors.compoundGreen,
		opacity: '1',
		borderRadius: '10px',
		width: '10px',
		height: '10px',
		marginRight: '3px',
		marginLeft:'6px'
	},
	name: {
		paddingLeft: '24px',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		}
	}
});

class Header extends Component {

	constructor(props) {
		super();

		this.state = {
			account: store.getStore('account'),
			modalOpen: false
		};
	}

	componentWillMount() {
		emitter.on(CONNECTION_CONNECTED, this.connectionConnected);
		emitter.on(CONNECTION_DISCONNECTED, this.connectionDisconnected);
	}

	componentWillUnmount() {
		emitter.removeListener(CONNECTION_CONNECTED, this.connectionConnected);
		emitter.removeListener(CONNECTION_DISCONNECTED, this.connectionDisconnected);
	}

  connectionConnected = () => {
  	this.setState({ account: store.getStore('account') });
  };

  connectionDisconnected = () => {
  	this.setState({ account: store.getStore('account') });
  }

  render() {
  	const {
  		classes
  	} = this.props;

  	const {
  		account,
  		modalOpen
  	} = this.state;

  	var address = null;
  	if (account.address) {
  		address = account.address.substring(0,6)+'...'+account.address.substring(account.address.length-4,account.address.length);
  	}

  	return (
  		<div className={ classes.root }>
  			<div className={ classes.headerV2 }>
  				<div className={ classes.icon }>
					<img
						alt=""
						src={ logoImgHeader }
						height={ '40px' }
						onClick={ () => { this.nav(''); } }
					/>
					<div className={classes.languages}>
						{Object.keys(i18nKeys).map(currentLang=><img
							style={{width:"35px", height:"30px", cursor: "pointer", margin: "0 5px", border: getI18n().language === currentLang ? "1px solid rgb(245,204,91)" : "1px solid rgb(174,174,174,0.4)",  boxShadow: getI18n().language === currentLang ? "3px 3px 2px rgb(245,204,91)" : ""}}
							src={ require(`../../assets/nationalFlag/${currentLang}.jpg`) }
							onClick={ () => this.changI18nLanguage(currentLang) }
						/>)}
					</div>
  				</div>
  				<div className={ classes.links }>
					{ this.renderLink("header.header.Text.3","dashboard",i18next.t('header.header.Text.3')) }
					{ this.renderLink("header.header.Text.4","add",i18next.t('header.header.Text.4')) }
  				</div>
  				<div className={ classes.account }>
  					{ address &&
              <Typography variant={ 'h4'} className={ classes.walletAddress } noWrap onClick={this.addressClicked} >
              	{ address }
              	<div className={ classes.connectedDot } />
              </Typography>
  					}
  					{ !address &&
              <Typography variant={ 'h4'} className={ classes.walletAddress } noWrap onClick={this.addressClicked}  id="header.header.Text.2" >{i18next.t('header.header.Text.2')}</Typography>
  					}
  				</div>
  			</div>
  			{ modalOpen && this.renderModal() }
  		</div>
  	);
  }
  renderLink = (id, screen, desc) => {
  	const {
  		classes
  	} = this.props;
  	return (
  		<div id={id} className={ `${classes.link} ${(window.location.pathname==='/'+screen) && classes.linkActive}` } onClick={ () => { this.nav(screen); } }>
			<Typography variant={'h4'} className={ `title` }>{ desc }</Typography>
  		</div>
	);
  }

  nav = (screen) => {
  	this.props.history.push('/'+screen);
  }

  addressClicked = () => {
  	this.setState({ modalOpen: true });
  }

  closeModal = () => {
  	this.setState({ modalOpen: false });
  }

  renderModal = () => {
  	return (
  		<UnlockModal closeModal={ this.closeModal } modalOpen={ this.state.modalOpen } />
  	);
  }

  changI18nLanguage = (i18nKey) => {
	i18next.changeLanguage(i18nKey);
	this.setState({});
  }
}

export default withRouter(withStyles(styles)(Header));
