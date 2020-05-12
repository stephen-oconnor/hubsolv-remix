import moment from 'moment';

export default function calculateCreatedTime(created: string): string {
	return moment(created).fromNow(true);
}
