//i18n => {"disclaimer.disclaimer.Text.1":"This project is in beta. Use at your own risk."}
import i18next from "i18next";
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
	Typography
} from '@material-ui/core';
import { withRouter } from "react-router-dom";
import { colors } from '../../theme';

const styles = theme => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: '100%',
		marginTop: '40px',
		[theme.breakpoints.up('md')]: {
			minWidth: '900px',
		}
	},
	disclaimer: {
		padding: '12px',
		border: '1px solid rgb(174, 174, 174)',
		borderRadius: '0.75rem',
		lineHeight: '1.2',
		background: colors.white,
	}
});

class Disclaimer extends Component {

	constructor(props) {
		super();

		this.state = {};
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={ classes.root }>
				<Typography variant={'h5'} className={ classes.disclaimer } id="disclaimer.disclaimer.Text.1" >{i18next.t('disclaimer.disclaimer.Text.1')}</Typography>
			</div>
		);
	}
}

export default withRouter(withStyles(styles)(Disclaimer));
