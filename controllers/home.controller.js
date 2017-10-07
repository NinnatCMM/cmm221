exports.index = function(req,res) {

	// res.render('home.twig')
	let content = {
		highlight: {
			url:'/assets/images/home/banner/highlight.jpg',
			title: 'Hello'
		},
		thumbnail: [
			{
				url:'/assets/images/home/banner/thumbnail-1.jpg',
				title: 'Vegetable'
			},
			{
				url:'/assets/images/home/banner/thumbnail-2.jpg',
				title: 'business'
			},
			{
				url:'/assets/images/home/banner/thumbnail-3.jpg',
				title: 'ingredient'
			},
			{
				url:'/assets/images/home/banner/thumbnail-4.jpg',
				title: 'playing'
			}]
	}

	res.render('home.twig',content)
}
// 	let content = {
// 		banner: [
// 		{
// 			id:1,
// 			url:'//image/img-1.jpg'
// 		},
// 		{
// 			id:2,
// 			url:'//image/img-1.jpg'
// 		}
// 		]
// 	}

// 	res.json(content)
// }

