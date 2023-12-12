if (typeof PBS == 'undefined'){
    window.PBS = {
	'KIDS' : {}
    }
}
else {
    if (typeof PBS.KIDS == 'undefined'){
	window.PBS.KIDS = {}
    }
}

PBS.KIDS.Sites = (function(){

    var _sites = {"A": {"go": [], "both": [{"group": "A", "site_placement": "both", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/arthur.png", "base_url": "http://thetoonsofjosh.github.io/arthur/", "big_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/big-arthur.gif", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-arthur.gif", "site_title": "Arthur", "kids_nav_graphic": "http://thetoonsofjosh.github.io/home/images/shows/arthur.gif", "go_nav_graphic": "http://thetoonsofjosh.github.io/go/images/shows/arthur.gif", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/arthur.png"}, {"group": "A", "site_placement": "both", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/curious-george.png", "base_url": "http://thetoonsofjosh.github.io/curiousgeorge", "big_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/big-curiousgeorge.gif", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-curiousgeorge.gif", "site_title": "Curious George", "kids_nav_graphic": "http://thetoonsofjosh.github.io/home/images/shows/curiousgeorge.gif", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/curious-george.png"}, {"group": "A", "site_placement": "both", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/daniel-tigers-neighborhood.png", "base_url": "http://thetoonsofjosh.github.io/daniel/", "big_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/big-daniel.gif", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-daniel.jpg", "site_title": "Daniel Tiger's Neighborhood ", "kids_nav_graphic": "http://thetoonsofjosh.github.io/home/images/shows/daniel.gif", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/daniel-tigers-neighborhood.png"}, {"group": "A", "site_placement": "both", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/dinosaur-train.png", "base_url": "http://thetoonsofjosh.github.io/dinosaurtrain/", "big_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/big-dinosaurtrain.jpg", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-dinosaurtrain.gif", "site_title": "Dinosaur Train", "kids_nav_graphic": "http://thetoonsofjosh.github.io/home/images/shows/dinosaurtrain.gif", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/dinosaur-train.png"}, {"group": "A", "site_placement": "both", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/martha-speaks.png", "base_url": "http://thetoonsofjosh.github.io/martha/", "big_graphic": "", "small_graphic": "", "site_title": "Martha Speaks", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/martha-speaks.png"}, {"group": "A", "site_placement": "both", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/sesame-street.png", "base_url": "http://thetoonsofjosh.github.io/sesame/", "big_graphic": "", "small_graphic": "", "site_title": "Sesame Street", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/sesame-street.png"}, {"group": "A", "site_placement": "both", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/sid-the-science-kid.png", "base_url": "http://thetoonsofjosh.github.io/sid/", "big_graphic": "", "small_graphic": "", "site_title": "Sid the Science Kid", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/sid-the-science-kid.png"}, {"group": "A", "site_placement": "both", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/super-why.png", "base_url": "http://thetoonsofjosh.github.io/superwhy/", "big_graphic": "", "small_graphic": "", "site_title": "Super Why!", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/super-why.png"}, {"group": "A", "site_placement": "both", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/the-cat-in-the-hat.png", "base_url": "http://thetoonsofjosh.github.io/catinthehat", "big_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/big-CITH.jpg", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-CITH.jpg", "site_title": "The Cat in the Hat", "kids_nav_graphic": "http://thetoonsofjosh.github.io/home/images/shows/catinthehat.gif", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/the-cat-in-the-hat.png"}, {"group": "A", "site_placement": "both", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/the-electric-company.png", "base_url": "http://thetoonsofjosh.github.io/electriccompany/", "big_graphic": "", "small_graphic": "", "site_title": "The Electric Company", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/the-electric-company.png"}, {"group": "A", "site_placement": "both", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/wild-kratts.png", "base_url": "http://thetoonsofjosh.github.io/wildkratts", "big_graphic": "", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-wilk.jpg", "site_title": "Wild Kratts", "kids_nav_graphic": "http://thetoonsofjosh.github.io/home/images/shows/wildkratts.gif", "go_nav_graphic": "http://thetoonsofjosh.github.io/go/images/shows/wildkratts.gif", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/wild-kratts.png"}, {"group": "A", "site_placement": "both", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/wordgirl.png", "base_url": "http://thetoonsofjosh.github.io/wordgirl/", "big_graphic": "", "small_graphic": "", "site_title": "WordGirl", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/wordgirl.png"}], "kids": [{"group": "A", "site_placement": "kids", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/thomas-friends.png", "base_url": "http://thetoonsofjosh.github.io/thomasandfriends/", "big_graphic": "", "small_graphic": "", "site_title": "Thomas & Friends ", "kids_nav_graphic": "http://thetoonsofjosh.github.io/home/images/shows/thomasandfriends.gif", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/thomas-friends.png"}]}, "C": {"go": [{"group": "B", "site_placement": "go", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/its-my-life.png", "base_url": "http://thetoonsofjosh.github.io/itsmylife/", "big_graphic": "", "small_graphic": "", "site_title": "It's My Life", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/its-my-life.png"}, {"group": "B", "site_placement": "go", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/maya-miguel.png", "base_url": "http://thetoonsofjosh.github.io/mayaandmiguel", "big_graphic": "", "small_graphic": "", "site_title": "Maya & Miguel", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/maya-miguel.png"}, {"group": "B", "site_placement": "go", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/webonauts.png", "base_url": "http://thetoonsofjosh.github.io/webonauts", "big_graphic": "", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-webonauts.gif", "site_title": "Webonauts", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/webonauts.png"}, {"group": "B", "site_placement": "go", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/zoom.png", "base_url": "http://thetoonsofjosh.github.io/zoom/", "big_graphic": "", "small_graphic": "", "site_title": "ZOOM", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/zoom.png"}], "both": [], "kids": [{"group": "A", "site_placement": "kids", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/angelina-ballerina.png", "base_url": "http://thetoonsofjosh.github.io/angelina/", "big_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/big-angelina.gif", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-angelina.gif", "site_title": "Angelina Ballerina", "kids_nav_graphic": "http://thetoonsofjosh.github.io/home/images/shows/angelinaballerina.gif", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/angelina-ballerina.png"}, {"group": "A", "site_placement": "kids", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/barney-and-friends.png", "base_url": "http://thetoonsofjosh.github.io/barney", "big_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/big-barney.gif", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-barney.gif", "site_title": "Barney and Friends", "kids_nav_graphic": "http://thetoonsofjosh.github.io/home/images/shows/barney.gif", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/barney-and-friends.png"}, {"group": "A", "site_placement": "kids", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/frannys-feet.png", "base_url": "http://thetoonsofjosh.github.io/frannysfeet/", "big_graphic": "", "small_graphic": "", "site_title": "Franny's Feet", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/frannys-feet.png"}, {"group": "A", "site_placement": "kids", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/lomax-the-hound-of-music.png", "base_url": "http://thetoonsofjosh.github.io/lomax/", "big_graphic": "", "small_graphic": "", "site_title": "Lomax the Hound of Music", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/lomax-the-hound-of-music.png"}, {"group": "A", "site_placement": "kids", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/mama-mirabelles-home-movies.png", "base_url": "http://thetoonsofjosh.github.io/mamamirabelle/", "big_graphic": "", "small_graphic": "", "site_title": "Mama Mirabelle's Home Movies", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/mama-mirabelles-home-movies.png"}, {"group": "A", "site_placement": "kids", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/mister-rogers-neighborhood.png", "base_url": "http://thetoonsofjosh.github.io/rogers/", "big_graphic": "", "small_graphic": "", "site_title": "Mister Rogers' Neighborhood", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/mister-rogers-neighborhood.png"}, {"group": "A", "site_placement": "kids", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/toopy-and-binoo.png", "base_url": "http://thetoonsofjosh.github.io/toopyandbinoo/", "big_graphic": "", "small_graphic": "", "site_title": "Toopy and Binoo", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/toopy-and-binoo.png"}]}, "B": {"go": [{"group": "B", "site_placement": "go", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/chuck-vanderchuck.png", "base_url": "http://thetoonsofjosh.github.io/chuck", "big_graphic": "", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-chuck.jpg", "site_title": "Chuck Vanderchuck", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/chuck-vanderchuck.png"}, {"group": "B", "site_placement": "go", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/cyberchase.png", "base_url": "http://thetoonsofjosh.github.io/cyberchase", "big_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/big-cyberchase.gif", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-cyberchase.gif", "site_title": "Cyberchase", "kids_nav_graphic": "http://thetoonsofjosh.github.io/home/images/shows/cyberchase.gif", "go_nav_graphic": "http://thetoonsofjosh.github.io/go/images/shows/cyberchase.gif", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/cyberchase.png"}, {"group": "B", "site_placement": "go", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/design-squad.png", "base_url": "http://thetoonsofjosh.github.io/designsquad/", "big_graphic": "", "small_graphic": "", "site_title": "Design Squad", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/design-squad.png"}, {"group": "B", "site_placement": "go", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/eekoworld.png", "base_url": "http://thetoonsofjosh.github.io/eekoworld/", "big_graphic": "", "small_graphic": "", "site_title": "EekoWorld", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/eekoworld.png"}, {"group": "B", "site_placement": "go", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/fetch-with-ruff-ruffman.png", "base_url": "http://thetoonsofjosh.github.io/fetch/", "big_graphic": "", "small_graphic": "", "site_title": "FETCH! with Ruff Ruffman", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/fetch-with-ruff-ruffman.png"}, {"group": "B", "site_placement": "go", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/fizzys-lunch-lab.png", "base_url": "http://thetoonsofjosh.github.io/lunchlab/", "big_graphic": "", "small_graphic": "", "site_title": "Fizzy's Lunch Lab", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/fizzys-lunch-lab.png"}, {"group": "B", "site_placement": "go", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/oh-noah.png", "base_url": "http://thetoonsofjosh.github.io/noah", "big_graphic": "", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-noah.jpg", "site_title": "Oh Noah! ", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/oh-noah.png"}, {"group": "B", "site_placement": "go", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/scigirls.png", "base_url": "http://thetoonsofjosh.github.io/scigirls/", "big_graphic": "", "small_graphic": "", "site_title": "SciGirls", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/scigirls.png"}, {"group": "B", "site_placement": "go", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/wilson-ditch.png", "base_url": "http://thetoonsofjosh.github.io/wilsonandditch/", "big_graphic": "", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-wilsonandditch.gif", "site_title": "Wilson & Ditch", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/wilson-ditch.png"}], "both": [], "kids": [{"group": "B", "site_placement": "kids", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/caillou.png", "base_url": "http://thetoonsofjosh.github.io/caillou", "big_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/big-caillou.gif", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-caillou.gif", "site_title": "Caillou", "kids_nav_graphic": "http://thetoonsofjosh.github.io/home/images/shows/caillou.gif", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/caillou.png"}, {"group": "B", "site_placement": "kids", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/clifford-the-big-red-dog.png", "base_url": "http://thetoonsofjosh.github.io/clifford", "big_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/big-clifford.gif", "small_graphic": "http://thetoonsofjosh.github.io/kids/images/programs/small-clifford.gif", "site_title": "Clifford The Big Red Dog", "kids_nav_graphic": "http://thetoonsofjosh.github.io/home/images/shows/clifford.gif", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/clifford-the-big-red-dog.png"}, {"group": "B", "site_placement": "kids", "go_featured_graphic_url": "http://thetoonsofjosh.github.io/go/media/handpicked-shows/wordworld.png", "base_url": "http://thetoonsofjosh.github.io/wordworld/", "big_graphic": "", "small_graphic": "", "site_title": "WordWorld", "kids_nav_graphic": "", "go_nav_graphic": "", "go_graphic_url": "http://thetoonsofjosh.github.io/go/media/show-thumbs/wordworld.png"}]}, "D": {"go": [], "both": [], "kids": []}};


    var _order = function(brand){
	//Tiers are determined by site brand
	var sites = Array();
	var tier1, tier2, tier3, tier4;
	//Make deepcopies of all arrays
	if (brand == 'preschool' || brand == 'both'){
	    tier1 = PBS.KIDS.$_auth.extend(true, [], _sites['A']['both'].concat(_sites['A']['kids']));
	    tier2 = PBS.KIDS.$_auth.extend(true, [], _sites['B']['both'].concat(_sites['B']['kids']));
	    tier3 = PBS.KIDS.$_auth.extend(true, [], _sites['B']['go']);
	}
	else{
	    tier1 = PBS.KIDS.$_auth.extend(true, [], _sites['A']['both'].concat(_sites['A']['kids']));
	    tier2 = PBS.KIDS.$_auth.extend(true, [], _sites['B']['go']);
	    tier3 = PBS.KIDS.$_auth.extend(true, [], _sites['B']['both'].concat(_sites['B']['kids']));
	}
	
	var tiers = [tier1, tier2, tier3]
	//Loop through tiers
	for (var i=0; i < tiers.length;  i++){
	    //Pick a random item from tier group
	    //Append it to the list
	    //tier group
	    //As long as there are items in group
	    while ( tiers[i].length > 0 ){
		//Pick a random one
		var random_index = Math.floor(Math.random()*tiers[i].length)
		//Put it in list
		sites.push(tiers[i].splice(random_index, 1)[0]);
	    }
	}
	return sites;
    };

    return { 
	order: function(brand){ return _order(brand) }
    }

})();



