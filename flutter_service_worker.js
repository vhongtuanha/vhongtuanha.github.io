'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7ad0e45f7a9878d0740d8d8c690ad0f8",
"assets/assets/icons/body/001-ribcage.png": "e585553ccb753a45ae1843fce451cd36",
"assets/assets/icons/body/002-eye.png": "b85ee825d6d01928b6979275a6d72910",
"assets/assets/icons/body/003-blood.png": "252803f06c57602fd3b1419af9f04b87",
"assets/assets/icons/body/004-tongue.png": "a2b3df99b943594af56696afa4d420d3",
"assets/assets/icons/body/005-stomach.png": "f2121e34357665d5cd2c1042247cd8a1",
"assets/assets/icons/body/006-skull.png": "90b340d4054fd20f2dd2350258167896",
"assets/assets/icons/body/007-finger.png": "878cf2074982842ad3e89e57fe8f3117",
"assets/assets/icons/body/008-brain.png": "6f8bb10b1fcb851ad4bc6165d279cdfa",
"assets/assets/icons/body/009-nose.png": "9648ea4a7b4f764a61c661ccfbefebf2",
"assets/assets/icons/body/010-testicles.png": "a7cef9fc22263c8d784be0fc8e86154c",
"assets/assets/icons/body/011-head.png": "faaa7108893602052f0f7a38b32b3735",
"assets/assets/icons/body/012-heart.png": "c2eea26b37e355433c893baa0a7e04a8",
"assets/assets/icons/body/013-large%2520intestine.png": "e06c81392d18e467b7f4597e49b882e5",
"assets/assets/icons/body/014-leg.png": "c061ef103ca3d4ccab3f057a2c0b7b72",
"assets/assets/icons/body/015-foot.png": "762debc2fe0cb0f8964949add61f64eb",
"assets/assets/icons/body/016-breast.png": "6623cb0e47cf5069ae4ccce7b072bcb2",
"assets/assets/icons/body/017-ear.png": "b92ae12f0c217f3d5470a18a8adbd548",
"assets/assets/icons/body/018-fingerprint.png": "71f4628d74748e45c249344d7f973df3",
"assets/assets/icons/body/019-buttocks.png": "ca0a12234570eb10312b1613d0f74176",
"assets/assets/icons/body/020-back.png": "f27e900d2e47e06e34c4a3a837d4bd28",
"assets/assets/icons/body/021-abdominals.png": "973718106f7114f76c6f25be15264f1d",
"assets/assets/icons/body/022-kidneys.png": "98827ad7918500fe424ebf34cacf23ab",
"assets/assets/icons/body/023-bicep.png": "edec056a9fe82920909f19b57d373955",
"assets/assets/icons/body/024-uterus.png": "b66b724b2242a505b01771bf68774b30",
"assets/assets/icons/body/025-bladder.png": "a2fbb33d2b6e189f10e271969fe0f9f8",
"assets/assets/icons/body/026-pancreas.png": "2a0bf509bedd792b5d0073e210575d3c",
"assets/assets/icons/body/027-sperm.png": "57bd50ef7cdf658110c82b2e1db794f8",
"assets/assets/icons/body/028-penis.png": "1a69a34fcab2e0a8cf59dd3ba3416b03",
"assets/assets/icons/body/029-spleen.png": "ca04f7bf3fda07d2693dbff0e3576c4a",
"assets/assets/icons/body/030-neuron.png": "7cbc9972398b263531cb5fc148a4c0ae",
"assets/assets/icons/body/031-skin.png": "d1a9d4de71137c1a064aa865f94535b9",
"assets/assets/icons/body/032-pelvis.png": "3b38b89ba6bc50fb6d4962d4470f0f3c",
"assets/assets/icons/body/033-teeth.png": "68ad457dce44d6a8d14516cd36d4b6d8",
"assets/assets/icons/body/034-thyroid.png": "6a4b75801c0707fb140c98706d4d8265",
"assets/assets/icons/body/035-neck.png": "d3e6dd64704a45b0538cf4b17adb8c1b",
"assets/assets/icons/body/036-gallbladder.png": "858b6e470f62d7c0c6f3c70ccb68a027",
"assets/assets/icons/body/037-fetus.png": "aed22564ea3f328e640f9a0879784dd7",
"assets/assets/icons/body/038-hand.png": "ac33d9b643aa8613ab370d7ef377dc95",
"assets/assets/icons/body/039-beard.png": "7f85a75203603a9c73cc41de0b76ef9a",
"assets/assets/icons/body/040-veins.png": "c5a6c33b0f7b692c10ae0b8d916c43f4",
"assets/assets/icons/body/041-muscle.png": "75802de8368675a86b08b383b82eadc6",
"assets/assets/icons/body/042-throat.png": "53bfc213b6c952d63d1381e6a370ac9b",
"assets/assets/icons/body/043-eye.png": "c2a7e8fcdde32b31aaf84c7241582498",
"assets/assets/icons/body/044-lips.png": "08eda01982135331e52a098d4c644fc3",
"assets/assets/icons/body/045-vagina.png": "f56d8b82fe00aaec719244f5220631ba",
"assets/assets/icons/body/046-lungs.png": "67a5045d7bdcc0f305dd81c3cb90fc4b",
"assets/assets/icons/body/047-spine.png": "35008bb497ac9b3474aed6733edbef6b",
"assets/assets/icons/body/048-joint.png": "079c1911ca7153d4e8eb079f7836e1ce",
"assets/assets/icons/body/049-dna.png": "7be5f7cb0fd71513a225dd001b76d1fb",
"assets/assets/icons/body/050-liver.png": "56dbc8aeb8d257fa04b3e6e7de9ed3b3",
"assets/assets/icons/medical/101-aeroplane.png": "199a63d6f73dda03fb9097496096a5ea",
"assets/assets/icons/medical/101-ambulance.png": "42017a11dc224daa573e465e83d82c66",
"assets/assets/icons/medical/101-app.png": "ac0928b15a6412c00c0fbf6eada9e1a8",
"assets/assets/icons/medical/101-band-aid.png": "3256cf300171a69f09d550252093eda9",
"assets/assets/icons/medical/101-blood-donation-1.png": "f192c25b9635fdd0e070ac1047d09604",
"assets/assets/icons/medical/101-blood-donation.png": "8854ff2ab9f79a0c5b41dad45e4c571a",
"assets/assets/icons/medical/101-blood-sample.png": "eea48765bc260b6ce928910113ee8398",
"assets/assets/icons/medical/101-braces.png": "d4a9a8adfd8064cdc1d9550757bf11d2",
"assets/assets/icons/medical/101-brain.png": "c2423bbfef3304aa2b0bae7c1a7c8416",
"assets/assets/icons/medical/101-cardiogram-1.png": "ecfc645e75ce8b8a7d5c3d9491568149",
"assets/assets/icons/medical/101-cardiogram-2.png": "2bacb9ede54feb5581712fcd2202a984",
"assets/assets/icons/medical/101-cardiogram-3.png": "3c219107697b5ada7cc2e96b4f2040aa",
"assets/assets/icons/medical/101-cardiogram.png": "b4aaa17b7df04e135a2eb5e89d5878d7",
"assets/assets/icons/medical/101-cardiology.png": "74aa7e4a07cd3877d870bd5542407fa6",
"assets/assets/icons/medical/101-computer.png": "802940154c407f8e2e3e1d01c3e980de",
"assets/assets/icons/medical/101-dentist-tools.png": "00a00f87d28c684ec9065fdfa51a9f8c",
"assets/assets/icons/medical/101-doctor-1.png": "b8b0abf8ef504bc6276177e86a4de909",
"assets/assets/icons/medical/101-doctor-2.png": "6434d72ce9e16251c4f41f4e5a146567",
"assets/assets/icons/medical/101-doctor-3.png": "df83b817d95074b6b8da8ec489087cc1",
"assets/assets/icons/medical/101-doctor.png": "a4040890a14cf4de8ecea56265f66cf7",
"assets/assets/icons/medical/101-dropper.png": "c8d6b149f8b64634cf5d7cccd72642bb",
"assets/assets/icons/medical/101-exercise.png": "b2eb719bd95856500449c58f6ff8f0cd",
"assets/assets/icons/medical/101-fat.png": "97d646154f533fc7dcf650debf7284bc",
"assets/assets/icons/medical/101-first-aid-kit.png": "659b9aefef582409231a80a586956df3",
"assets/assets/icons/medical/101-flask.png": "2f710ad5db1a1b2b55f09e0c045019aa",
"assets/assets/icons/medical/101-folder.png": "15e1366a257a8da4027126af728b4336",
"assets/assets/icons/medical/101-fracture.png": "07b27a141ad0784722d7ca17e7f0446e",
"assets/assets/icons/medical/101-gender.png": "ffa415b371f9bc1daaad2bbe4523a5d9",
"assets/assets/icons/medical/101-hair.png": "150111cb2a0665dee906c12f02308c2b",
"assets/assets/icons/medical/101-heart.png": "a4c4c2626cf9ac5e22d1ff37a4163567",
"assets/assets/icons/medical/101-helicopter.png": "bc890d3a2b0e2d3bcdb72c5a46d37371",
"assets/assets/icons/medical/101-hospital.png": "65ea2b5956ccbb109599df74180b0779",
"assets/assets/icons/medical/101-injection.png": "0d4d8f511422f0487a531ec1786b8a27",
"assets/assets/icons/medical/101-injury.png": "b49b213a7531efce297a7b5feb0b4755",
"assets/assets/icons/medical/101-kidneys.png": "7d58dd9de4b3d702d7fe51a84280ec12",
"assets/assets/icons/medical/101-knee.png": "2da8c717e92442d659d076d2f15481e1",
"assets/assets/icons/medical/101-large-intestine.png": "0a67c58ffe02b16f25b4229fd648cb17",
"assets/assets/icons/medical/101-liver.png": "541d7b89804f6cf0ddf82e226c6f1655",
"assets/assets/icons/medical/101-lungs.png": "d675331a381c26703e1dd801d996e65a",
"assets/assets/icons/medical/101-mail.png": "06cd7b647d554cb37cf7579121c605ab",
"assets/assets/icons/medical/101-medical-1.png": "3cd82bd37d5e52526aed3e18be36ba3b",
"assets/assets/icons/medical/101-medical-history-1.png": "cf12f83563943f12ada6ab9df90ddab6",
"assets/assets/icons/medical/101-medical-history-2.png": "d6b9c0f59592141a7d3569fb88bb317c",
"assets/assets/icons/medical/101-medical-history.png": "459a18070b6580a64527f2d03c0e941b",
"assets/assets/icons/medical/101-medical.png": "9da9f597001204e6844068d56043d6e7",
"assets/assets/icons/medical/101-medicine-1.png": "e18d37289cf810f191b441ea98ef0dd1",
"assets/assets/icons/medical/101-medicine-2.png": "149ccdf94548a92217f48c0ba970627f",
"assets/assets/icons/medical/101-medicine.png": "9687a168944692ad65e5e71e6736fe42",
"assets/assets/icons/medical/101-mortar.png": "a4b8eaac937da61234513e4d03ddfd35",
"assets/assets/icons/medical/101-muscle.png": "a746e88785451fa3dec0304278c22745",
"assets/assets/icons/medical/101-newborn.png": "15d4b48f5284a95920976838387b8f53",
"assets/assets/icons/medical/101-newspaper.png": "56c7df553e84b7659993667ce4c9abde",
"assets/assets/icons/medical/101-no-smoking.png": "83e3f38a95ddc79fe7305c956e8d91b7",
"assets/assets/icons/medical/101-nurse-1.png": "82598378caab3deb0c58d8dbbef61fe6",
"assets/assets/icons/medical/101-nurse-2.png": "db0addb9a4961a7bc5a702b04db61e2b",
"assets/assets/icons/medical/101-nurse.png": "6a92692be6682fa89bc5a1f2cf982fdc",
"assets/assets/icons/medical/101-ophthalmology.png": "4df0df9bd4854badc4c71347b920c570",
"assets/assets/icons/medical/101-otorhinolaryngology.png": "fd642e9419d7a50ba0a3cf446f2b3495",
"assets/assets/icons/medical/101-pain.png": "87b76d9fd54d6077c1fdb553354ef529",
"assets/assets/icons/medical/101-patient-1.png": "af00344580918498864b77791bfc017b",
"assets/assets/icons/medical/101-patient.png": "7100f9272780a70d423d93e6472af7fe",
"assets/assets/icons/medical/101-pharmacy-1.png": "e9d9e37ce9e51d5bd44ff1c2de704ac9",
"assets/assets/icons/medical/101-pharmacy-2.png": "bbb65c4c465b94bcff8aee8d2781bb55",
"assets/assets/icons/medical/101-pharmacy-3.png": "8f0b8ac65f9270727065c31ac74091b1",
"assets/assets/icons/medical/101-pharmacy.png": "83467b9ec63343366abd07eec6711c40",
"assets/assets/icons/medical/101-pills-1.png": "2f154ce1eda19e4bf770cd964c26de8d",
"assets/assets/icons/medical/101-pills.png": "47b86f20bcf0603276eadaff0fd516aa",
"assets/assets/icons/medical/101-poison.png": "6bbd71f4fd678afc95226b9faca5bf84",
"assets/assets/icons/medical/101-pregnancy.png": "440416c6be061fa0a11902d57ca3979f",
"assets/assets/icons/medical/101-search.png": "fd948336808d8c43c8f9cc8fcef82ce2",
"assets/assets/icons/medical/101-skull.png": "fc2027fea3f5f57cab4159174b54e3e4",
"assets/assets/icons/medical/101-slim-1.png": "fa23256ef4c3dbe36f8be4f652a9e5b8",
"assets/assets/icons/medical/101-slim.png": "e3cdb052be6519dde71910b02fca830e",
"assets/assets/icons/medical/101-smartphone.png": "08925d6b54e6869b498ffbcea8055e07",
"assets/assets/icons/medical/101-snellen-chart.png": "97564e8928c63343ce9a8c04e8924b41",
"assets/assets/icons/medical/101-sprain.png": "41097355b31d592806ef31637353d49b",
"assets/assets/icons/medical/101-stethoscope.png": "e4271c495f36df8cf6985a5e11300b8d",
"assets/assets/icons/medical/101-stomach.png": "26a427446e7bd40b0a9591dae5407364",
"assets/assets/icons/medical/101-stretcher.png": "5c614acac7e2fe4451578a8f1668a995",
"assets/assets/icons/medical/101-surgeon-1.png": "7acef22a5c7a9fa76693430a4fb88c9f",
"assets/assets/icons/medical/101-surgeon.png": "51a2c4cf0ee28cb85e11eee97aa4c7e5",
"assets/assets/icons/medical/101-surgery.png": "a0ca9d89e3fa1ee5e7559beb12133f66",
"assets/assets/icons/medical/101-tablets.png": "e44068727c20fe9032d8ade11714f694",
"assets/assets/icons/medical/101-teeth-1.png": "9e99d9119f06a836f5b652ee941af8c4",
"assets/assets/icons/medical/101-teeth.png": "f8f4e51cadb001d7de3231e01daf5dc5",
"assets/assets/icons/medical/101-test-tubes.png": "63425e555815431f54f0cb5fff0caa19",
"assets/assets/icons/medical/101-thermometer-1.png": "5cfbfff7611dd6ddc8814a227ce63e29",
"assets/assets/icons/medical/101-thermometer.png": "2f8924c28ff9be9581a0766a4af6e1d2",
"assets/assets/icons/medical/101-tooth-1.png": "1d3f99bb18c43595a7cd3337c8fc9ae2",
"assets/assets/icons/medical/101-tooth.png": "08514f1f83692dfc8b9fd45d3184c3e5",
"assets/assets/icons/medical/101-visibility.png": "00816c89e51d6d8212933878562721dc",
"assets/assets/icons/medical/101-water.png": "22bb8f78bf44e0451a922727473586a0",
"assets/assets/icons/medical/101-wheelchair.png": "3b30d92676c4d264d18b9e6d1bb658e3",
"assets/assets/icons/medical/101-worldwide-1.png": "4522119f3cc3b29539c0a3780eb967b7",
"assets/assets/icons/medical/101-worldwide-2.png": "2acc42f0b452137fb3ee7dd6d2fc3ce4",
"assets/assets/icons/medical/101-worldwide-3.png": "ac015f756497e109eac975b0f8eae44e",
"assets/assets/icons/medical/101-worldwide.png": "d70152581c68b875c2b1038571563b23",
"assets/assets/icons/medical/101-x-ray-1.png": "e4e786cc69ff189b3538c09737e08f7f",
"assets/assets/icons/medical/101-x-ray.png": "6b5a4909e56a33a08c70c134ba49ef2f",
"assets/assets/icons/medical/101-yoga.png": "e660320c0c2203aef2be3f178396a2e3",
"assets/assets/icons/other/cardiogram.png": "4b81a576a4f5420ad08924bb2c335ddf",
"assets/assets/icons/professionals/001-cardiologist.png": "32386f556dabcd91ba978297cdb1de16",
"assets/assets/icons/professionals/002-radiologist.png": "8d7c0f2edb474194c542b38673e9aa1a",
"assets/assets/icons/professionals/003-dentist.png": "b72f9890e4144f238e37af78684dbca3",
"assets/assets/icons/professionals/004-opthalmologist.png": "d091e9ef29612f5621c76c356532b24a",
"assets/assets/icons/professionals/005-orthopedist.png": "d2449711429af4cacdbf4a5bde7a1167",
"assets/assets/icons/professionals/006-therapist.png": "f533b60ece4f9f710627b0a9d38ca548",
"assets/assets/icons/professionals/007-surgeon.png": "abb3e50a8dd9ebf1d8ec53f7ab67cd6f",
"assets/assets/icons/professionals/008-surgeon.png": "1865680387805acf0b0406ea065fc68b",
"assets/assets/icons/professionals/009-psychiatrist.png": "1d9633754792c16f6a7dad8c6ad2d08c",
"assets/assets/icons/professionals/010-allergist.png": "8421a948b26b55c7414a6ec20cb76b0d",
"assets/assets/icons/professionals/011-surgeon.png": "fb923ef0f26e46153ce0c3a427983397",
"assets/assets/icons/professionals/012-neurosurgeon.png": "a714a420ca16094f7015d258b35242e4",
"assets/assets/icons/professionals/013-veterinarian.png": "5ab9b1521adc0e0183de6f61d8fd3528",
"assets/assets/icons/professionals/014-anesthesiologist.png": "c5eb784b30dbf786d04d67be49c4c041",
"assets/assets/icons/professionals/015-gynecologist.png": "42787fbdbcccce2c8ecc9582019d4b3f",
"assets/assets/icons/professionals/016-podiatrist.png": "d4857fb549871766704bb648a96992f0",
"assets/assets/icons/professionals/017-pathologist.png": "67c6f14c8905961445d42f19e25b48d9",
"assets/assets/icons/professionals/018-pediatrician.png": "f007d608960c93ba0f369590194d0708",
"assets/assets/icons/professionals/019-otolaryngologist.png": "b9518af5bfc283c493c9953f43a8e1ad",
"assets/assets/icons/professionals/020-dermatologist.png": "3b2cb82ccdefb7dead9b0aae2535f3ae",
"assets/assets/icons/professionals/021-oncologist.png": "020808c7c02d0cc0033c7334ba68e278",
"assets/assets/icons/professionals/022-intensivist.png": "dfe774298e70ac51188423d15d501f73",
"assets/assets/icons/professionals/023-hospitalist.png": "c95cb1a74de733fc08f232db8e181809",
"assets/assets/icons/professionals/024-nephrologist.png": "5cdaecf3b9653624b583da9d2ba1db84",
"assets/assets/icons/professionals/025-Pharmacist.png": "8da58f023c9183fea35cf8fca3bee061",
"assets/assets/icons/professionals/026-cardiologist.png": "354ef9d9bc0ab1dc965b18cf705b0d12",
"assets/assets/icons/professionals/027-radiologist.png": "7e15d098871649b9e3f49786b269a2df",
"assets/assets/icons/professionals/028-dentist.png": "af346aa6b95ab307fd6b64381dca23b4",
"assets/assets/icons/professionals/029-nurse.png": "bfa532aecc08c889b09785ae202f8c1d",
"assets/assets/icons/professionals/030-orthopedist.png": "88459b78ffba0dd5bf09c050acdd4f1d",
"assets/assets/icons/professionals/031-surgeon.png": "080d518fd6da13a4bedf89643095d1df",
"assets/assets/icons/professionals/032-surgeon.png": "c02f117a79ac396803c3149e102701b4",
"assets/assets/icons/professionals/033-therapist.png": "bbec57ee2fca493a254601c5139f0029",
"assets/assets/icons/professionals/034-nurse.png": "3a2a2e3db87a99e1579559deef9cbff8",
"assets/assets/icons/professionals/035-allergist.png": "7ea1a44481497303e597b8cd2ef91c36",
"assets/assets/icons/professionals/036-psychiatrist.png": "02caec2f9619e40c8aa9cce73af46076",
"assets/assets/icons/professionals/037-neurosurgeon.png": "2139ee97968cb960bc7e8cac0bce4e23",
"assets/assets/icons/professionals/038-nurse.png": "070b8304054483b9780f87adfb5e547d",
"assets/assets/icons/professionals/039-gynecologist.png": "1c95063a107fe1d84d07be0df93d0152",
"assets/assets/icons/professionals/040-veterinarian.png": "14cf17532b793f55f552ca08a5bb8076",
"assets/assets/icons/professionals/041-opthalmologist.png": "fd9852b982bf17747601e2cc80c2a963",
"assets/assets/icons/professionals/042-anesthesiologist.png": "2bfbdd410cc286d316e1cd56465b08b9",
"assets/assets/icons/professionals/043-dermatologist.png": "c9fa35bc1633e0b034cda0434d4a09bb",
"assets/assets/icons/professionals/044-nephrologist.png": "857659a2c45dafa43c99be0f4f327c23",
"assets/assets/icons/professionals/045-nurse.png": "0d5e7da8cc7373e7c695e7943d102bab",
"assets/assets/icons/professionals/046-otolaryngologist.png": "00553602293d4234cebd24763d8dc667",
"assets/assets/icons/professionals/047-pathologist.png": "f1d61635459d40c30fd8e8aa2b315146",
"assets/assets/icons/professionals/048-nurse.png": "a64fad2f1d6c975f7ef0016d838e5bf5",
"assets/assets/icons/professionals/049-surgeon.png": "a35536fcbb69a9d4016100171eb00688",
"assets/assets/icons/professionals/050-podiatrist.png": "34952d099d511f0320150a91c61ce141",
"assets/assets/images/pathologies/divers/echo/10variationsea.gif": "ece61df5d2860e69ba3ac0edaa8dc74e",
"assets/assets/images/pathologies/divers/echo/11diagepanchementpericardique.gif": "8f1c27b6d6752a7862a4a1ee9914f31a",
"assets/assets/images/pathologies/divers/echo/12diagcoeurpulmaigu.gif": "ad07d4e09eff05d035cbf35c15fa4d8e",
"assets/assets/images/pathologies/divers/echo/13dopplermitral.gif": "305f68e59bbddb69041d59d5944232b5",
"assets/assets/images/pathologies/divers/echo/14fuitemitral.gif": "e4bf95861fab0af0e4753a2fd9490595",
"assets/assets/images/pathologies/divers/echo/15pleuropulm.gif": "2b302ea26e6f1a3ca3e16a616fd099de",
"assets/assets/images/pathologies/divers/echo/16lignepleurale.gif": "ec957de3920346a57339cf3c7de21cfc",
"assets/assets/images/pathologies/divers/echo/17tmpleuropulm.gif": "e8c3be45837d4897477771b352086dc6",
"assets/assets/images/pathologies/divers/echo/18queuescometes.gif": "ad75453d29bc860405dc97ecaa807134",
"assets/assets/images/pathologies/divers/echo/19epanchementpleural.gif": "c6a3d412380b4f744b603933a367ed32",
"assets/assets/images/pathologies/divers/echo/20diagpneumothorax.gif": "38ca5118aee5b40d966f8bd8b9198e9f",
"assets/assets/images/pathologies/divers/echo/21consolidationpulm.gif": "fb4f536844cef4968ce6fb5a0d012a36",
"assets/assets/images/pathologies/divers/echo/22diagepanchementperitoneal.gif": "7220f2458bbdc8b34dc0c0b389e8a56a",
"assets/assets/images/pathologies/divers/echo/23globeurinaire.gif": "b83532c310fa0471e358111398a06730",
"assets/assets/images/pathologies/divers/echo/24dilatationurinaire.gif": "6bef1376539aa0fe73f2ad1947f3e617",
"assets/assets/images/pathologies/divers/echo/25dtc.gif": "fdaf3a9257fc35f0e9ec066e334777cf",
"assets/assets/images/pathologies/divers/echo/26dtcpratique.gif": "68c1a93af2e29561cc9558692039f73b",
"assets/assets/images/pathologies/divers/echo/27psga.jpg": "868cae59f332efcf28ba85ede58ec232",
"assets/assets/images/pathologies/divers/echo/28pspa.jpg": "3444237c7c5f75cac94e36a0c384cefc",
"assets/assets/images/pathologies/divers/echo/29pspa2.jpg": "f9c170cd2e8b184a41e46a1e1c07376c",
"assets/assets/images/pathologies/divers/echo/2pyramide.gif": "011f35b7baad8030444139b0309153f2",
"assets/assets/images/pathologies/divers/echo/30pspa3.png": "a65b30f414694b78d52fb3b3cc819d88",
"assets/assets/images/pathologies/divers/echo/31apical4c.jpg": "491d45ca0380dee329daaeab93c956a0",
"assets/assets/images/pathologies/divers/echo/32apical5c.jpg": "ff04d95bf8216efb12f4242acdc0dfb6",
"assets/assets/images/pathologies/divers/echo/33apical2c.jpg": "ce8691618fde19c788d6fd871cdce7ee",
"assets/assets/images/pathologies/divers/echo/34apicale3c.png": "398b9df2a049fc54d490478deb16b142",
"assets/assets/images/pathologies/divers/echo/35souscostale.jpg": "380fae52b2aedfddcd8d54799fb2ff42",
"assets/assets/images/pathologies/divers/echo/35vci.jpg": "cc58934cd7ca3cfc546bf16eabd68c3b",
"assets/assets/images/pathologies/divers/echo/36soucostalevci.png": "3b2cc55c16c25eb52933bd48a5283ba1",
"assets/assets/images/pathologies/divers/echo/37tamponnade.jpg": "425faf6b462d2962b64e6ea27b90a14d",
"assets/assets/images/pathologies/divers/echo/38paps.jpg": "926529fbe887cf9c1b7f86867b50f3c9",
"assets/assets/images/pathologies/divers/echo/39tapse.png": "29ecb6d60e2bd6eb1638d8ba5ff35097",
"assets/assets/images/pathologies/divers/echo/3sondes.gif": "5aca01a44bfac014ec2a4fe58a68c08b",
"assets/assets/images/pathologies/divers/echo/4modes2dtm.gif": "037fec62659b1e9bd3964c31e67c7ce3",
"assets/assets/images/pathologies/divers/echo/5doppler.gif": "19beb17d733c9b6819313f24b8c8a7c6",
"assets/assets/images/pathologies/divers/echo/6stenoseaortique.gif": "695de5178de927c8e9427d05c3006320",
"assets/assets/images/pathologies/divers/echo/7fenetres.gif": "b44b8fcd248c42c6a6760cc9d80e53a5",
"assets/assets/images/pathologies/divers/echo/8coupes.gif": "27a3134f537b6f055f8b2877f0c50ec3",
"assets/assets/images/pathologies/divers/echo/9fluxdopplermitral.gif": "92d0c0d8b2b4b25b828e209a63c2476c",
"assets/assets/images/pathologies/divers/intox/1toxicbandeau.jpg": "2039d27965cdc44ec811618015dc2c09",
"assets/assets/images/pathologies/generique.jpg": "a7d0038dbd9e2a88e0f2ba9a813e9c27",
"assets/assets/images/pathologies/generiquetransparent.png": "6ea9561df263e3f80ef10b9069995141",
"assets/assets/images/pathologies/hemodynamique/acfa/1ecgbandeau.jpg": "80570af785d750f9c43e616d103e83e6",
"assets/assets/images/pathologies/hemodynamique/acfa/2ralentiracfamolecules.png": "e8371d00e6b121ef48b431a1406be7a9",
"assets/assets/images/pathologies/hemodynamique/acfa/3reductionacfamolecules.png": "dcf4c7e1178dbc21c77cead934ed5cb5",
"assets/assets/images/pathologies/hemodynamique/acfa/4relaiacfamolecules.png": "77c551e0048a0776dba2d17aabe69727",
"assets/assets/images/pathologies/hemodynamique/chochemorragique/Image1.jpg": "f55436320c467121e93b9cf3b6b728a3",
"assets/assets/images/pathologies/hemodynamique/chochemorragique/Image2.jpg": "c1dc560d732bd8237f2e70ac42000581",
"assets/assets/images/pathologies/hemodynamique/chochemorragique/protocolealgo.png": "f83be703426750125428c43312d50e5b",
"assets/assets/images/pathologies/hemodynamique/etatdechoc/1determinantpam.PNG": "1548599d0360250d0b3ec3021242daf7",
"assets/assets/images/pathologies/hemodynamique/etatdechoc/2etiologie.PNG": "3685eb4bee623e0b6e79fea86b3c210e",
"assets/assets/images/pathologies/hemodynamique/etatdechoc/4calculrvs.PNG": "e00ce6cf095c27b8dba60f64178bc54f",
"assets/assets/images/pathologies/hemodynamique/etatdechoc/5guytonnormal.PNG": "f3afe2ae1328efc603b1971c5303af70",
"assets/assets/images/pathologies/hemodynamique/etatdechoc/6guytoncardiogenique.PNG": "ced31d7c1897f1c6de9527dad332f992",
"assets/assets/images/pathologies/hemodynamique/etatdechoc/7guytondistributif.PNG": "dc107b1f908a0636c9639ed56c2d31b2",
"assets/assets/images/pathologies/hemodynamique/etatdechoc/8guytonhypovolemique.PNG": "206eae62a9505b9d06234c596904cd1d",
"assets/assets/images/pathologies/hemodynamique/hdalgo/algo1.png": "dfa670bce4e6a5efe203eeb5af867174",
"assets/assets/images/pathologies/hemodynamique/picco/2normespicco.png": "b69b3ad5004415639f6ebb1e4f9e59db",
"assets/assets/images/pathologies/hemodynamique/picco/3montagepicco.png": "a9d3f5dc9e7850b5f5e891a2fed00d5c",
"assets/assets/images/pathologies/hemodynamique/protocateco/Image1.png": "c74b022b99abf4b5b840a0fe7146d81a",
"assets/assets/images/pathologies/hemodynamique/protocateco/Image10.png": "63cdc5d8f93eaa2f27749dd5281c667e",
"assets/assets/images/pathologies/hemodynamique/protocateco/Image11.png": "6c47a37012195eaecb77917f95898067",
"assets/assets/images/pathologies/hemodynamique/protocateco/Image12.png": "0ff35986f675822d27b371e286409b23",
"assets/assets/images/pathologies/hemodynamique/protocateco/Image13.png": "66a0d52d8c64eeabe3b5ed11e36e2860",
"assets/assets/images/pathologies/hemodynamique/protocateco/Image14.png": "885dbac9896a683deaba73be231e2938",
"assets/assets/images/pathologies/hemodynamique/protocateco/Image2.png": "c6904bb3f94eaa84bb5992294d335369",
"assets/assets/images/pathologies/hemodynamique/protocateco/Image3.png": "36b0dc224da50f99c768df036f884b00",
"assets/assets/images/pathologies/hemodynamique/protocateco/Image4.png": "e45f8603e0db2c2f3d8f00a18fac554a",
"assets/assets/images/pathologies/hemodynamique/protocateco/Image5.png": "b7ea4f20c96ea027c8113105ad789d8b",
"assets/assets/images/pathologies/hemodynamique/protocateco/Image6.png": "3c3376e6a58fb21c86c000d6323e746d",
"assets/assets/images/pathologies/hemodynamique/protocateco/Image7.png": "9cf6023c0fbec2f8ca6c503480cc8254",
"assets/assets/images/pathologies/hemodynamique/protocateco/Image8.png": "50534d65d74736a80f3359715ba9008b",
"assets/assets/images/pathologies/hemodynamique/protocateco/Image9.png": "a8c47665a934aa8a20f33b362579572a",
"assets/assets/images/pathologies/hemodynamique/sca/2stemiequivalent.jpg": "c7313b0e77ecf44f546afc3efbcdd1df",
"assets/assets/images/pathologies/hemodynamique/sca/3sgarbossamodified.jpg": "5b54ac9cc5e4325cff8a30ff59c7d723",
"assets/assets/images/pathologies/hemodynamique/sca/4algosca.png": "6945a9b432ed59554c74c68683cd1a8c",
"assets/assets/images/pathologies/hemodynamique/sca/4algosca2.png": "7037f043daa6610b7777cf3deda1ecce",
"assets/assets/images/pathologies/infectieux/antiinfectieux/1atbbandeau.png": "0c1d361da845b8adbb279cb537a3431c",
"assets/assets/images/pathologies/infectieux/covid/1covidbandeau.jpg": "3af8fa7acdac2722d4717f4e3c17bad3",
"assets/assets/images/pathologies/infectieux/covid/1covidbandeaunoir.jpg": "1872f66757ca58764430f57872e36f8f",
"assets/assets/images/pathologies/infectieux/covid/algocovidghef1.PNG": "e507213f61a78f0cddeb3c6a416e8c36",
"assets/assets/images/pathologies/infectieux/covid/algocovidghef2.PNG": "06c191c6400b6c1217412481b7586adb",
"assets/assets/images/pathologies/infectieux/covid/algocovidghef3.PNG": "ec84a0de406191520e1566d514402ba7",
"assets/assets/images/pathologies/infectieux/dureeatb/DureeATB1.png": "4ca44e8354c110c416f44f8c8cb82e43",
"assets/assets/images/pathologies/infectieux/dureeatb/DureeATB2.png": "fe32dd8744ddd80f2534b8c4aa687e61",
"assets/assets/images/pathologies/infectieux/escarres/1Escarre.PNG": "19a1060a07059182a9052426d806061d",
"assets/assets/images/pathologies/infectieux/escarres/2Escarre.PNG": "441bcceb95ae98adba7bd4b17ed3e92b",
"assets/assets/images/pathologies/infectieux/escarres/3Escarre.PNG": "340ba25c53ea5446f1d5e30eceaf2682",
"assets/assets/images/pathologies/infectieux/escarres/4Escarre.PNG": "d7295d9824d1a86645505289d0d66d12",
"assets/assets/images/pathologies/metabolique/corticoide/1EquivalentCT.PNG": "6f4daacd32ff04d29213805eba385309",
"assets/assets/images/pathologies/metabolique/hyponatremie/1algorithmeHypoNAttt.png": "9d9af97b3305adef31d473741f5df33f",
"assets/assets/images/pathologies/metabolique/hyponatremie/2hyponadiag.jpg": "09f42cb21a2f8ffd13bd3afe0a85e3be",
"assets/assets/images/pathologies/metabolique/lactate/1lactateb.png": "abe7fe4421a135d0166b27c6a893ccfc",
"assets/assets/images/pathologies/metabolique/lactate/2lactate.png": "d8118c8b2fc1a9fd23c28afadf79e2f1",
"assets/assets/images/pathologies/metabolique/lactate/3lactate.png": "3bd09fe19a7f851322147d7ee9c192af",
"assets/assets/images/pathologies/metabolique/lactate/4lactate.png": "254a893e9fe2efbd5d140cd532127822",
"assets/assets/images/pathologies/metabolique/lactate/5lactate.png": "fd6f29fa6429a1fdafe2d9fd0a18954c",
"assets/assets/images/pathologies/metabolique/lactate/6lactate.png": "861d3711202405039b6efabcfe1b91be",
"assets/assets/images/pathologies/neurologie/eeg/1EEG.PNG": "18cd2a08714dc4ad953f143658d0d479",
"assets/assets/images/pathologies/neurologie/eeg/2EEG.JPG": "d1206673b816c3dcdb9aeaf5e508ca18",
"assets/assets/images/pathologies/neurologie/eme/1EME.PNG": "3fe29b160503f6c17504212251d7cf97",
"assets/assets/images/pathologies/neurologie/eme/2EME.PNG": "a598e3ec82d6cff361add93630d73be7",
"assets/assets/images/pathologies/neurologie/eme/3EME.PNG": "82253699c02b83c4baa4bb806336350f",
"assets/assets/images/pathologies/neurologie/eme/4EME.PNG": "6397780936468bb5548565bc95d2bb87",
"assets/assets/images/pathologies/neurologie/eme/5EME.PNG": "6b832e5a846602a8252d394bae952250",
"assets/assets/images/pathologies/neurologie/eme/6EME.PNG": "46e780838e0143802422ac6a04f13128",
"assets/assets/images/pathologies/neurologie/monitorageneuro/1algocurarisation.PNG": "3fedf367578d69cb59c9c22f94b5ceb5",
"assets/assets/images/pathologies/neurologie/monitorageneuro/4tof.PNG": "0cd16b86763a28ea8bf151e459fd3f01",
"assets/assets/images/pathologies/neurologie/monitorageneuro/5bis.PNG": "80662ab490360962c9295c0963ea9962",
"assets/assets/images/pathologies/neurologie/sedation/1sedationbandeau.jpg": "f0b149d55081c6b242603dc50900cec8",
"assets/assets/images/pathologies/neurologie/sedation/2Sedation.PNG": "23dd9c31f9990180b70e7133ceb13d78",
"assets/assets/images/pathologies/neurologie/sedation/3Sedation.PNG": "b66fa408877cdbce345f3e9b4b91c511",
"assets/assets/images/pathologies/renal/1reinbandeau.jpg": "e641eea9c88da436d538f5c31d1a20b4",
"assets/assets/images/pathologies/renal/balancehydrique/fluidoverload.png": "9c84693b3f67ff3c46c53c6d608ff4a7",
"assets/assets/images/pathologies/renal/balancehydrique/maximiser.png": "2f90ef1d02612fcbdd576f5c731c80b2",
"assets/assets/images/pathologies/renal/balancehydrique/minimiser.png": "5f729268d1746fa12dd9b3207df50fea",
"assets/assets/images/pathologies/renal/balancehydrique/resistancediuretique.png": "fad762aff2f1ac22e99267d9314b29af",
"assets/assets/images/pathologies/respiratoire/asynchronie/10cyclagetardif.png": "3552fabc2db638e788d6694bd0e5b322",
"assets/assets/images/pathologies/respiratoire/asynchronie/11cyclageprecoce.png": "236eefa038619eb3d278d45579c74bb3",
"assets/assets/images/pathologies/respiratoire/asynchronie/12cyclageprecoce.png": "68d7d2c3aab5bca6b213475531eb77b4",
"assets/assets/images/pathologies/respiratoire/asynchronie/13cyclageprecoce.png": "9d48ce242addf20fe4e45a12a3fc5df2",
"assets/assets/images/pathologies/respiratoire/asynchronie/14reversetriggering.png": "0cf5d781b0a8777209f55110adf320d5",
"assets/assets/images/pathologies/respiratoire/asynchronie/1typeasynchronie.png": "5fe51808fa5c6b4c9ed79533d2b882f0",
"assets/assets/images/pathologies/respiratoire/asynchronie/2effortinefficace.png": "0e88334c959f38faaed2c6ccdc0dad26",
"assets/assets/images/pathologies/respiratoire/asynchronie/3effortinefficace.png": "2a589be849b0c1626271c111536d4f30",
"assets/assets/images/pathologies/respiratoire/asynchronie/4autodeclenchement.png": "bfde333f5fad84ead7ea44c7471b2aef",
"assets/assets/images/pathologies/respiratoire/asynchronie/5autodeclenchement.png": "c9fe2ed8b90748ae8f75c7b19f4b3b17",
"assets/assets/images/pathologies/respiratoire/asynchronie/6doubledeclenchement.png": "f24654e4c7caf5e2c35208aab8c3d865",
"assets/assets/images/pathologies/respiratoire/asynchronie/7doubledeclenchement.png": "16a7f92618a03c4f0da1159ac76c2698",
"assets/assets/images/pathologies/respiratoire/asynchronie/8cyclagetardif.png": "a0b3ca206349e22d402c5da6cc1b4f6d",
"assets/assets/images/pathologies/respiratoire/asynchronie/9cyclagetardif.png": "43eefedea7634d9985935aba50fa676c",
"assets/assets/images/pathologies/respiratoire/capnographie/1principe.PNG": "eb2a63fac1e2aadbac841197adb7e49c",
"assets/assets/images/pathologies/respiratoire/capnographie/2usages.PNG": "94d43fdcce07847c3eff37d6cad88867",
"assets/assets/images/pathologies/respiratoire/capnographie/3systemecapno.PNG": "9c674dc76e30cc72a2826a8bf6243ef6",
"assets/assets/images/pathologies/respiratoire/capnographie/4capnogramme.PNG": "5e816b3bd3e8f226bd1fb132b92a5150",
"assets/assets/images/pathologies/respiratoire/capnographie/5patterncapno.PNG": "60e3f8333aa1cd856bc67e07c1749a54",
"assets/assets/images/pathologies/respiratoire/efr/1examinationbandeau.jpg": "0025eaf1a8243619240df04980021d77",
"assets/assets/images/pathologies/respiratoire/efr/2efr1.PNG": "563748ed10563f198a937ded295f0c79",
"assets/assets/images/pathologies/respiratoire/efr/3efrnormal.PNG": "693447b787bdcd7463eb32adcb12e3d6",
"assets/assets/images/pathologies/respiratoire/efr/4efrobstructive.PNG": "5b7f7f371b58c8e028672cb765973ffb",
"assets/assets/images/pathologies/respiratoire/efr/5efrrestrictif.PNG": "d1d8d24561475e74d881c006ee93696b",
"assets/assets/images/pathologies/respiratoire/efr/6efrobstructionfixevoieaeriennesup.PNG": "9840c3f223001412724957396ace3ce6",
"assets/assets/images/pathologies/respiratoire/efr/7efrobstructionextrathovar.PNG": "a530a97642dd60c6241456f174c3004d",
"assets/assets/images/pathologies/respiratoire/efr/8efrobstructionintrathovar.PNG": "839635b019bbcbd5e363b5aa367e6d43",
"assets/assets/images/pathologies/respiratoire/fibroscopie/Image1.jpg": "9fd81ef16b5a2819309560bc183f329a",
"assets/assets/images/pathologies/respiratoire/fibroscopie/Image2.jpg": "27e73f0c5a563b8c8c85118a5010ad9e",
"assets/assets/images/pathologies/respiratoire/fibroscopie/Image3.jpg": "380d225ec5fa3c661c2ae2b8a298f667",
"assets/assets/images/pathologies/respiratoire/fibroscopie/Image4.jpg": "ac8b5055cf5b1423a2dfb81ca40fa675",
"assets/assets/images/pathologies/respiratoire/hypoxie/hypoxie1.jpg": "3b106fe4b3748f790f45030cb76d1c8d",
"assets/assets/images/pathologies/respiratoire/hypoxie/hypoxie2.jpg": "8f3f8ccbff94cc8aceedc97cb128ba59",
"assets/assets/images/pathologies/respiratoire/intubation/Image1.jpg": "75e48e9b6b83b54ed07d37eb5a6fbda7",
"assets/assets/images/pathologies/respiratoire/intubation/Image2.jpg": "8c7aaf817c826cdb989c13bbf6650983",
"assets/assets/images/pathologies/respiratoire/intubation/Image3.jpg": "e1fe3981fa48c9c61acad9910b6a5c07",
"assets/assets/images/pathologies/respiratoire/intubation/Image4.jpg": "9a2fc114310bb9186665ed3c04c0e532",
"assets/assets/images/pathologies/respiratoire/intubation/Image5.jpg": "e9003fda81333c092b6092c76a2a491b",
"assets/assets/images/pathologies/respiratoire/intubation/Image6.jpg": "01ef9dd618c3e1997b469486597a7189",
"assets/assets/images/pathologies/respiratoire/intubation/Image7.png": "1322857a89d547cc37306df991e6a0d8",
"assets/assets/images/pathologies/respiratoire/intubation/Image8.png": "233e834f799fe6f8a50deb013bec8969",
"assets/assets/images/pathologies/respiratoire/modeventilatoire/algorithmereglage.png": "3c751eef7f33682bd2e18dfffd584bad",
"assets/assets/images/pathologies/respiratoire/modeventilatoire/determinantsventilation.png": "cefcc793405b19f4a49758a001473cbe",
"assets/assets/images/pathologies/respiratoire/modeventilatoire/mesureajuster.png": "bdf65843decae661d9a819f6deb5a55e",
"assets/assets/images/pathologies/respiratoire/modeventilatoire/modesventilatoires.png": "596192d5672784644cf6473e0ede8259",
"assets/assets/images/pathologies/respiratoire/tracheotomiepercut/imagesetapestracheotomiepercut.png": "894b08c9ceb11575c93db1a415c07a07",
"assets/assets/images/pathologies/respiratoire/tracheotomiepercut/resumeproceduretrachpercut.png": "c1a21f7d0c79a3d0cc1b2b6dec9da6b1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "3d458f925c46956264db9fd2438a18fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d307f80b0a634cd7ac11d572e36ea58e",
"/": "d307f80b0a634cd7ac11d572e36ea58e",
"main.dart.js": "228035dfe481eaac5f223f46e8623578",
"manifest.json": "1e8731a1cb377a6c2c169505e1c11d13",
"version.json": "0d6003293d62fea620f15fa2141832d5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
