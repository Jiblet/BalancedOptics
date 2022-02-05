"use strict";

/*
Original from Fershte:
---
Tarkov's balance is a gigantic mess.
Just terrible.
So I tried to make it better.
This specific mod only addresses optics and mounts.
Basically, I took offence that . The best parts were either untouched of very very slightly buffed.
But most importantly, a lot of things were brought much closer to meta.

My long term goal is simply to give players more choices for running competitive and cool weapons and builds.
---

Jiblet: I fully agree with Fershte's notes, so have updated the mod to include the 12.12 optics and updated the constructor function.
I've also separated out the 30mm scopes from the 34mms and made them -3 - Fershte probably hates this. Hah!
Oh and I also brough the PU 3.5x for the mosin into the 30mm optic category (-3 ergo ). -5 made my inner Russian sad.
*/

class Mod
{
	constructor()
    {
		this.mod = "BalancedOptics";
        Logger.info(`Loading: ${this.mod}`)
		ModLoader.onLoad[this.mod] = this.load.bind(this);
		// common_f.logger.logInfo(`Loading: ${this.mod}`);
        // core_f.packager.onLoad[this.mod] = this.load.bind(this);
    }

    load()
    {			
		//Assault Scopes 
		{
			let modErgo = "-2"; //this matches the HAMR, a 4x with a red dot. This should be where all other assault scopes line up :)
			
			//ELCAN SpecterDR 1x/4x Scope FDE
			DatabaseServer.tables.templates.items["57aca93d2459771f2c7e26db"]._props.Ergonomics = modErgo,
			
			//ELCAN SpecterDR 1x/4x Scope
			DatabaseServer.tables.templates.items["57ac965c24597706be5f975c"]._props.Ergonomics = modErgo,
			
			//Leupold Mark 4 HAMR 4x24mm DeltaPoint hybrid assault scope
			DatabaseServer.tables.templates.items["544a3a774bdc2d3a388b4567"]._props.Ergonomics = modErgo,
			
			//Monstrum Compact prism scope 2x32
			DatabaseServer.tables.templates.items["5d2dc3e548f035404a1a4798"]._props.Ergonomics = modErgo,
			
			//Primary Arms Compact prism scope 2.5x
			DatabaseServer.tables.templates.items["5c1cdd512e22161b267d91ae"]._props.Ergonomics = modErgo,
			
			//Sig BRAVO4 4X30 Scope
			DatabaseServer.tables.templates.items["57adff4f24597737f373b6e6"]._props.Ergonomics = modErgo,
			
			//Trijicon ACOG 3.5x35 scope
			DatabaseServer.tables.templates.items["59db7e1086f77448be30ddf3"]._props.Ergonomics = modErgo,
			
			//Trijicon ACOG TA01NSN 4x32 scope
			DatabaseServer.tables.templates.items["5c05293e0db83400232fff80"]._props.Ergonomics = modErgo,
			
			//Trijicon ACOG TA01NSN 4x32 scope TAN
			DatabaseServer.tables.templates.items["5c052a900db834001a66acbd"]._props.Ergonomics = modErgo,
			
			//Valday PS-320 1x/6x Scope //could maybe go in scopes instead? How is this diff than an LPVO?
			DatabaseServer.tables.templates.items["5c0517910db83400232ffee5"]._props.Ergonomics = modErgo,

			//Eotech HHS-1 sight //Technically Collimators, but they fit more in this category.
			DatabaseServer.tables.templates.items["5c07dd120db834001c39092d"]._props.Ergonomics = modErgo,
			
			//Eotech HHS-1 sight Tan
			DatabaseServer.tables.templates.items["5c0a2cec0db834001b7ce47d"]._props.Ergonomics = modErgo,
			
			//NPZ PK1 "Obzor" reflex sight //Actually collimator but I wanted an extra -1 for the dovetail mount
			DatabaseServer.tables.templates.items["618a5d5852ecee1505530b2a"]._props.Ergonomics = modErgo,
			
			//BelOMO PK-AA reflex sight //Actually collimator but I wanted an extra -1 for the dovetail mount
			DatabaseServer.tables.templates.items["6113d6c3290d254f5e6b27db"]._props.Ergonomics = modErgo
		}
		
		//Collimators
		{
			let modErgo = "-1"; //this matches the Trijicon SRS-02 - sure, the Cobra can get +1, but that's a stupid exploit and I hate it.
			
			//Aimpoint COMP M4 reflex sight
			DatabaseServer.tables.templates.items["5c7d55de2e221644f31bff68"]._props.Ergonomics = modErgo,
			
			//Cobra EKP-8-02 reflex sight_dovetail
			DatabaseServer.tables.templates.items["5947db3f86f77447880cf76f"]._props.Ergonomics = modErgo,
			
			//Cobra EKP-8-18 reflex sight
			DatabaseServer.tables.templates.items["591c4efa86f7741030027726"]._props.Ergonomics = modErgo,
			
			//Eotech 553 holographic sight
			DatabaseServer.tables.templates.items["570fd6c2d2720bc6458b457f"]._props.Ergonomics = modErgo,
			
			//Eotech XPS3-0 holographic sight
			DatabaseServer.tables.templates.items["58491f3324597764bc48fa02"]._props.Ergonomics = modErgo,
			
			//Eotech XPS3-2 holographic sight
			DatabaseServer.tables.templates.items["584924ec24597768f12ae244"]._props.Ergonomics = modErgo,
			
			//Eotech EXPS3 holographic sight
			DatabaseServer.tables.templates.items["558022b54bdc2dac148b458d"]._props.Ergonomics = modErgo,
			
			//Holosun HS401G5 reflex sight
			DatabaseServer.tables.templates.items["5b30b0dc5acfc400153b7124"]._props.Ergonomics = modErgo,
			
			//OKP-7 reflex sight
			DatabaseServer.tables.templates.items["570fd79bd2720bc7458b4583"]._props.Ergonomics = modErgo,
			
			//OKP-7 reflex sight_dovetail
			DatabaseServer.tables.templates.items["57486e672459770abd687134"]._props.Ergonomics = modErgo,
			
			//Trijicon SRS-02 reflex sight
			DatabaseServer.tables.templates.items["5d2da1e948f035477b1ce2ba"]._props.Ergonomics = modErgo,
			
			//VOMZ Pilad P1X42 "WEAVER" reflex sight
			DatabaseServer.tables.templates.items["584984812459776a704a82a6"]._props.Ergonomics = modErgo,
			
			//Valday 1P87 holographic sight
			DatabaseServer.tables.templates.items["5c0505e00db834001b735073"]._props.Ergonomics = modErgo,
			
			//Vortex Razor AMG UH-1 holographic sight
			DatabaseServer.tables.templates.items["59f9d81586f7744c7506ee62"]._props.Ergonomics = modErgo,
			
			//Walther MRS reflex sight
			DatabaseServer.tables.templates.items["570fd721d2720bc5458b4596"]._props.Ergonomics = modErgo,

			//NPZ 1P78 //technically an Optic but at -6 and then +5 with the eyecup it shoudl be -1, so???
			DatabaseServer.tables.templates.items["618a75f0bd321d49084cd399"]._props.Ergonomics = modErgo,

			//Aimpoint PRO reflex sight
			DatabaseServer.tables.templates.items["61659f79d92c473c770213ee"]._props.Ergonomics = modErgo,

			//Leapers UTG reflex sight
			DatabaseServer.tables.templates.items["6165ac8c290d254f5e6b2f6c"]._props.Ergonomics = modErgo
		}
		
		//Compact Collimators
		{
			let modErgo = "0"; //already true, but, hey.
			
			//Aimpoint Micro T-1 reflex sight
			DatabaseServer.tables.templates.items["58d399e486f77442e0016fe7"]._props.Ergonomics = modErgo,
			
			//Belomo PK-06 reflex sight
			DatabaseServer.tables.templates.items["57ae0171245977343c27bfcf"]._props.Ergonomics = modErgo,
			
			//Burris FastFire 3 Reflex Sight
			DatabaseServer.tables.templates.items["577d141e24597739c5255e01"]._props.Ergonomics = modErgo,
						
			//Leupold DeltaPoint Reflex Sight
			DatabaseServer.tables.templates.items["58d268fc86f774111273f8c2"]._props.Ergonomics = modErgo,
			
			//Sig Sauer Romeo 4 reflex sight
			DatabaseServer.tables.templates.items["5b3116595acfc40019476364"]._props.Ergonomics = modErgo,
			
			//Trijicon RMR
			DatabaseServer.tables.templates.items["5a32aa8bc4a2826c6e06d737"]._props.Ergonomics = modErgo,	
			
			//Aimpoint ACRO P-1 reflex sight
			DatabaseServer.tables.templates.items["616442e4faa1272e43152193"]._props.Ergonomics = modErgo,

			//Aimpoint Micro H-2 reflex sight
			DatabaseServer.tables.templates.items["61657230d92c473c770213d7"]._props.Ergonomics = modErgo
		}
		
		//Optics
		{
			//30mm
			{
				let modErgo = "-3"; //made -3 to differentiate between 30mm and 34mm Big Chungas optics
				
				//Burris FullField TAC 30 1-4x24 riflescope
				DatabaseServer.tables.templates.items["5b2388675acfc4771e1be0be"]._props.Ergonomics = modErgo,
				
				//EOtech Vudu 1-6 riflescope
				DatabaseServer.tables.templates.items["5b3b99475acfc432ff4dcbee"]._props.Ergonomics = modErgo,
				
				//Leupold Mark 4 LR 6.5-20x50 riflescope
				DatabaseServer.tables.templates.items["5a37cb10c4a282329a73b4e7"]._props.Ergonomics = modErgo,
				
				//Optical scope March Tactical 3-24x42 FFP
				DatabaseServer.tables.templates.items["57c5ac0824597754771e88a9"]._props.Ergonomics = modErgo,

				//Schmidt & Bender PM II 1-8x24 scope
				DatabaseServer.tables.templates.items["617151c1d92c473c770214ab"]._props.Ergonomics = modErgo,

				//Vortex Razor HD Gen.2 1-6x24 riflescope
				DatabaseServer.tables.templates.items["618ba27d9008e4636a67f61d"]._props.Ergonomics = modErgo,

				//PU 3.5x riflescope //I know, I know, not a 30mm optic but a 21mm. But it definitely shouldnt be -5, so it's here
				DatabaseServer.tables.templates.items["5b3f7c1c5acfc40dc5296b1d"]._props.Ergonomics = modErgo
			}
			
			//34mm
			{
				let modErgo = "-4"; //34mm optics suck, so much, so I might as well make them comparable to 30mm.
				
				//Hensoldt FF 4-16x56 scope
				DatabaseServer.tables.templates.items["56ea70acd2720b844b8b4594"]._props.Ergonomics = modErgo,
			
				//Nightforce ATACR 7-35x56 riflescope
				DatabaseServer.tables.templates.items["5aa66be6e5b5b0214e506e97"]._props.Ergonomics = modErgo,

				//Schmidt & Bender PM II 1-8x24 Scope
				DatabaseServer.tables.templates.items["61714eec290d254f5e6b2ffc"]._props.Ergonomics = modErgo
			}
			
			//KMZ
			{
				let modErgo = "-4"; //the sum when you use the mount and the eyecup
				
				//KMZ 1P59 3-10x riflescope
				DatabaseServer.tables.templates.items["5d0a3a58d7ad1a669c15ca14"]._props.Ergonomics = modErgo,
			
				//KMZ 1P69 3-10x riflescope
				DatabaseServer.tables.templates.items["5d0a3e8cd7ad1a6f6a3d35bd"]._props.Ergonomics = modErgo
			}
			
			//PSO
			{
				let modErgo = "-2"; //the sum when you use the eyecup
				
				//NPZ USP-1 4x scope //shouldn't be here but I hate the scope and want it to be a little better lol
				DatabaseServer.tables.templates.items["5cf638cbd7f00c06595bc936"]._props.Ergonomics = modErgo,
				
				//Zenit-Belomo PSO 1M2-1 4x24 scope
				DatabaseServer.tables.templates.items["576fd4ec2459777f0b518431"]._props.Ergonomics = modErgo,
				
				//Zenit-Belomo PSO 1M2 4x24 scope
				DatabaseServer.tables.templates.items["5c82343a2e221644f31c0611"]._props.Ergonomics = modErgo,
			
				//Zenit-Belomo PSO 1 4x24 scope
				DatabaseServer.tables.templates.items["5c82342f2e221644f31c060e"]._props.Ergonomics = modErgo
			}
		}
		
		//Special Sights
		{
			let modErgo = "-4"; //the REAP-IR is -4 when you use the eyecup, so fuck it, the other ones are the same now
			
			//FLIR RS-32 2.25-9x 35mm 60Hz thermal riflescope
			DatabaseServer.tables.templates.items["5d1b5e94d7ad1a2b865a96b0"]._props.Ergonomics = modErgo,
			
			//Trijicon REAP-IR thermal riflescope
			DatabaseServer.tables.templates.items["5a1eaa87fcdbcb001865f75e"]._props.Ergonomics = modErgo,
			
			//Vulcan MG night scope 3.5x
			DatabaseServer.tables.templates.items["5b3b6e495acfc4330140bd88"]._props.Ergonomics = modErgo,
			
			//NSPU-M night Scope
			DatabaseServer.tables.templates.items["5a7c74b3e899ef0014332c29"]._props.Ergonomics = modErgo
			
		}
		
		//Mounts
		{
			let modErgo = "0";
			
			//Armasight universal base
			DatabaseServer.tables.templates.items["5b3b6dc75acfc47a8773fb1e"]._props.Ergonomics = modErgo,
			
			//UNV DLOC-IRD Mount for sights
			DatabaseServer.tables.templates.items["5a1ead28fcdbcb001912fa9f"]._props.Ergonomics = modErgo,
			
			//KMZ 1P59 Dovetail mount
			DatabaseServer.tables.templates.items["5d0a29ead7ad1a0026013f27"]._props.Ergonomics = modErgo,
			
			//KMZ 1P69 Weaver mount
			DatabaseServer.tables.templates.items["5d0a29fed7ad1a002769ad08"]._props.Ergonomics = modErgo,
			
			//La Rue Tactical picatinny riser QD LT-101 mount
			DatabaseServer.tables.templates.items["5c064c400db834001d23f468"]._props.Ergonomics = modErgo,
			
			//High profile mount for Trijicon RMR
			DatabaseServer.tables.templates.items["5a33b652c4a28232996e407c"]._props.Ergonomics = modErgo,
			
			//Low profile mount for Trijicon RMR
			DatabaseServer.tables.templates.items["5a33b2c9c4a282000c5a9511"]._props.Ergonomics = modErgo,
			
			//Trijicon RMR mount for ACOG scopes
			DatabaseServer.tables.templates.items["5a33bab6c4a28200741e22f8"]._props.Ergonomics = modErgo,
			
			//TA51 Mount for sights
			DatabaseServer.tables.templates.items["59db7eed86f77461f8380365"]._props.Ergonomics = modErgo,
			
			//Compact mount for sights
			DatabaseServer.tables.templates.items["5c1cdd302e221602b3137250"]._props.Ergonomics = modErgo,
			
			//Mosin Rifle Kochetov mount
			DatabaseServer.tables.templates.items["5b3f7bf05acfc433000ecf6b"]._props.Ergonomics = modErgo
			
			//30mm mounts
			{
				let modErgo = "0";
				
				//30mm Scope mount
				DatabaseServer.tables.templates.items["57c69dd424597774c03b7bbc"]._props.Ergonomics = modErgo,
			
				//30mm ring-mount AR- P.E.P.R. made by Burris
				DatabaseServer.tables.templates.items["5b2389515acfc4771e1be0c0"]._props.Ergonomics = modErgo,
			
				//30mm ring-mount made by JP
				DatabaseServer.tables.templates.items["5a37ca54c4a282000d72296a"]._props.Ergonomics = modErgo,
			
				//30mm ring-mount Remington integral for model 700 rifles
				DatabaseServer.tables.templates.items["5bfebc5e0db834001a6694e5"]._props.Ergonomics = modErgo,
			
				//30mm rings made by Nightforce
				DatabaseServer.tables.templates.items["5b3b99265acfc4704b4a1afb"]._props.Ergonomics = modErgo
			}
			//34mm mounts
			{
				let modErgo = "0";
				
				//34mm one piece magmount made by I-E-A Mil Optics
				DatabaseServer.tables.templates.items["5c86592b2e2216000e69e77c"]._props.Ergonomics = modErgo,
			
				//34mm one piece magmount made by Nightforce
				DatabaseServer.tables.templates.items["5aa66a9be5b5b0214e506e89"]._props.Ergonomics = modErgo,
						
				//34mm one piece magmount made by Nightforce with a Multimount rail
				DatabaseServer.tables.templates.items["5aa66c72e5b5b00016327c93"]._props.Ergonomics = modErgo
			}
			//Geissele Super Precision mount and ring caps - I want them to combine to = 0 rather than +1 else why use any other mount
			{
				let modErgo = "-0.5";
				//Geissele Super Precision 30mm ring scope mount
				DatabaseServer.tables.templates.items["618b9643526131765025ab35"]._props.Ergonomics = modErgo,
				//Geissele Super Precision 30mm ring scope mount (DDC)
				DatabaseServer.tables.templates.items["618bab21526131765025ab3f"]._props.Ergonomics = modErgo
			}
		}
		
		//Misc
		{
			let modErgo = "0"; //fuck eyecups, they're fucking stupid. Fuck.
			
			//USP-1 scope eyecup
			DatabaseServer.tables.templates.items["5cf639aad7f00c065703d455"]._props.Ergonomics = modErgo,
			
			//Cobra family sights shade
			DatabaseServer.tables.templates.items["591c4e1186f77410354b316e"]._props.Ergonomics = modErgo,
			
			//Vulcan MG scope eyecup
			DatabaseServer.tables.templates.items["5b3cbc235acfc4001863ac44"]._props.Ergonomics = modErgo,
			
			//NSPU-M scope eyecup
			DatabaseServer.tables.templates.items["5ba36f85d4351e0085325c81"]._props.Ergonomics = modErgo,
			
			//PSO scope eyecup
			DatabaseServer.tables.templates.items["57f3a5ae2459772b0e0bf19e"]._props.Ergonomics = modErgo,
			
			//REAP-IR scope eyecup
			DatabaseServer.tables.templates.items["5a1eacb3fcdbcb09800872be"]._props.Ergonomics = modErgo,
			
			//1P59 scope eyecup
			DatabaseServer.tables.templates.items["5d0b5cd3d7ad1a3fe32ad263"]._props.Ergonomics = modErgo,

			//NPZ 1P78 scope eyecup
			DatabaseServer.tables.templates.items["618a760e526131765025aae3"]._props.Ergonomics = modErgo
		}
		
    }
}
module.exports.Mod = Mod;