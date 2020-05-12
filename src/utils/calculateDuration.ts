import moment, { Duration } from 'moment';

export default function calculateDuration(seconds: number): string {
	const momentDuration: Duration = moment.duration(seconds, 'seconds');
	const hours = momentDuration.hours();
	const minutes = momentDuration.minutes();

	return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
}
