export default function concatArrays(array1, array2, string) {
	return new Array(...array1, ...array2, ...string)
}
