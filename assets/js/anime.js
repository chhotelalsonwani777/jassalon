// Wrap every letter in a span
var textWrapper = document.querySelector('.h1-title .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
	// .add({
	// 	targets: '.h1-title .letter',
	// 	translateY: ["1.2em", 0],
	// 	translateZ: 0,
	// 	duration: 800,
	// 	delay: (el, i) => 50 * i
	// }).add({
	// 	targets: '.h1-title',
	// 	opacity: 0,
	// 	duration: 100,
	// 	easing: "easeOutExpo",
	// 	delay: 1000
	// });

var ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 1.5;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({ loop: true })
	.add({
		targets: '.ml4 .letters-1',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn
	}).add({
		targets: '.ml4 .letters-1',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: "easeInExpo",
		delay: ml4.delay
	}).add({
		targets: '.ml4 .letters-2',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn
	}).add({
		targets: '.ml4 .letters-2',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: "easeInExpo",
		delay: ml4.delay
	}).add({
		targets: '.ml4 .letters-3',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn
	}).add({
		targets: '.ml4 .letters-3',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: "easeInExpo",
		delay: ml4.delay
	}).add({
		targets: '.ml4',
		opacity: 0,
		duration: 500,
		delay: 500
	});


// 	// ----------------------------------------------------------------------------
// var textWrapper = document.querySelectorAll('.the, .jas, .academy, .salon');
// textWrapper.forEach(wrapper => {
//     wrapper.innerHTML = wrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// });

// anime.timeline({ loop: true })
//     .add({
//         targets: '.h1-title .letter',
//         translateY: ["1.2em", 0],
//         translateZ: 0,
//         duration: 800,
//         delay: (el, i) => 50 * i
//     }).add({
//         targets: '.h1-title',
//         opacity: 0,
//         duration: 100,
//         easing: "easeOutExpo",
//         delay: 100
//     });






// Har letter ko wrap karna
var textWrapper = document.querySelectorAll('.the, .jas, .academy, .salon');
textWrapper.forEach(wrapper => {
    wrapper.innerHTML = wrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

// Animation apply karna
anime.timeline({ loop: true })
    .add({
        targets: '.h1-title .letter',
        translateY: ["2em", 0], // Letters niche se upar aayenge
        rotateZ: [45, 0], // Letters rotate honge
        scale: [0.5, 1], // Letters chote se bade honge
        opacity: [0, 1], // Letters ki opacity increase hogi
        easing: "easeOutExpo",
        duration: 1000, // Animation ka duration
        delay: (el, i) => 50 * i // Har letter ke liye delay
    }).add({
        targets: '.h1-title',
        opacity: 0,
        duration: 500,
        easing: "easeOutExpo",
        delay: 500 // Kitne der ke baad fade out hoga
    });

	// ----------------------------------------------------------------------------