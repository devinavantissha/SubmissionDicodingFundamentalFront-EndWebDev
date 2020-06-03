class MenuBar extends HTMLElement{
	constructor(){
		super();
		this.shadowDOM=this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
	set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
        	*{
				padding: 0;
				margin: 0;
				box-sizing: border-box;
			}

			.menu-bar{
				text-align: center;
				display: inline;
				position: relative;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				padding: 0.5rem 1rem;	
			}

			.menu-bar ul{
				display: inline-flex;
				list-style: none;
				color: #222f3e;
			}

			.menu-bar ul li{
				width: 140px;
				margin: 15px;
				padding: 10px;
			}

			.menu-bar ul li a{
				text-decoration: none;
				color: #222f3e;
			}

			.menu-bar ul li:hover{
				background: #26de81;
				border-radius: 3px;
			}

			.menu-bar .fa{
				margin-right: 5px;
			}

			.sub-menu-1{
				display: none;
			}

			.menu-bar ul li:hover .sub-menu-1{
				display: block;
				position: absolute;
				background:  #26de81;
				margin-top: 15px;
				margin-left: -15px;
			}

			.menu-bar ul li:hover .sub-menu-1 ul{
				display: block;
				margin: 10px; 
			}

			.menu-bar ul li:hover .sub-menu-1 ul li{
				width: 150px;
				padding: 10px;
				border-bottom: 1px dotted #fff;
				background: transparent;
				border-radius: 0;
				text-align: left;
			}

			.menu-bar ul li:hover .sub-menu-1 ul li:last-child{
				border-bottom: none;
			}

			.menu-bar ul li:hover .sub-menu-1 ul li a:hover{
				color: #4b6584;
			}
			.form-inline{
				display: flex;
				flex-flow: row wrap;
				align-items: center;
			}

			.form-control{
				border-radius: 0.25rem;
				padding: 0.375rem 0.75rem;
				margin: 0px 8px 0px 0px;
				padding: 6px 12px;
				border: 1px solid #ced4da;
			}

			.btn{
				display: inline-block;
				font-weight: 400;
				text-align: center;
				vertical-align: middle;
				background-color: transparent;
				border: 1px solid transparent;
				padding: 0.375rem 0.75rem;
				border-radius: 0.24rem;
			}

			.btn-outline-success{
				color: black;
				border-color: black;
			}
			button, select {
			    text-transform: none;
			}
			.btn:hover {
				background-color: #4CAF50;
				color: white;
			  }
		</style>
		<nav class="menu-bar">
			<ul>
				<li><a href="../../index.html"><i class="fa fa-home"></i>HOME</a></li>
				<li><a href="#"><i class="fa fa-user"></i>ABOUT US</a>
					<div class="sub-menu-1">
						<ul>
							<li><a href="../../biodata.html">My Biodata</a></li>
							<li><a href="../../misi.html">Mission & Vision</a></li>
						</ul>
					</div>
				</li>
			</ul>
			<form class="form-inline">
	              <input class="form-control" type="search" id="searchElement" placeholder="Search" aria-label="Search">
	              <button class="btn btn-outline-success" id="searchButtonElement" type="submit">Search</button>
	        </form>
		</nav>
        `;
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
	}
}
customElements.define("menu-bar", MenuBar);