//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [
        //     id: 1,
        //     status: 1, 
        //     title: 'Nấm đùi gà xào cháy tỏi',
        //     img: './assets/img/products/nam-dui-ga-chay-toi.jpeg',
        //     category: 'Món mặn',
        //     price: 200000,
        //     desc: 'Một Món chay ngon miệng với nấm đùi gà thái chân hương, xào săn với lửa và thật nhiều tỏi băm, nêm nếm với mắm và nước tương chay, món ngon đưa cơm và rất dễ ăn cả cho người lớn và trẻ nhỏ.'
        // },
        // {
        //     id: 2,
        //     status: 1, 
        //     title: 'Rau xào ngũ sắc',
        //     img: './assets/img/products/rau-xao-ngu-sac.png',
        //     category: 'Món mặn',
        //     price: 180000,
        //     desc: 'Rau củ quả theo mùa tươi mới xào với nước mắm chay, gia vị để giữ được hương vị ngọt tươi nguyên thủy của rau củ, một món nhiều vitamin và chất khoáng, rất dễ ăn.'
        // },
        // {
        //     id: 3,
        //     status: 1, 
        //     title: 'Bánh lava phô mai nướng',
        //     img: './assets/img/products/banh_lava_pho_mai_nuong.jpeg',
        //     category: 'Món mặn',
        //     price: 180000,
        //     desc: 'Rau củ quả theo mùa tươi mới xào với nước mắm chay, gia vị để giữ được hương vị ngọt tươi nguyên thủy của rau củ, một món nhiều vitamin và chất khoáng, rất dễ ăn.'
        // },
        // {
        //     id: 4,
        //     status: 1, title: 'Set lẩu thái Tomyum',
        //     img: './assets/img/products/lau_thai.jpg',
        //     category: 'Món mặn',
        //     price: 699000,
        //     desc: 'Lẩu Thái là món ăn xuất phát từ món canh chua Tom yum nổi tiếng của Thái Lan. Nước lẩu có hương vị chua chua cay cay đặc trưng. Các món nhúng lẩu gồn thịt bò, hải sản, rau xanh và các loại nấm.'
        // },
        // {
        //     id: 5,
        //     status: 1, 
        //     title: 'Cơm chiên cua',
        //     img: './assets/img/products/com_chien_cua.png',
        //     category: 'Món mặn',
        //     price: 280000,
        //     desc: 'Cơm nấu từ gạo ST25 dẻo, hạt cơm tơi ngon, thịt cua tươi chắc nịch, bếp đảo cho săn hạt cơm, rồi đổ cua đã xào thơm vào, xúc miếng cơm chiên cua đầy đặn có thêm hành phi giòn rụm, món ngon như vậy đảm bảo tranh nhau đến miếng cuối cùng.'
        // },

        // {
        //     id: 6,
        //     status: 1, 
        //     title: 'Súp bào ngư hải sâm (1 phần)',
        //     img: './assets/img/products/sup-bao-ngu-hai-sam.jpeg',
        //     category: 'Món mặn',
        //     price: 540000,
        //     desc: 'Súp bào ngư Bếp Hoa có bào ngư kết hợp cùng sò điệp, tôm tươi... được hầm trong nhiều giờ với rau củ & nấm đông trùng tạo ra vị ngọt tự nhiên hiếm thấy. Một món ăn khiến cả người ốm cũng thấy ngon miệng đó ạ.'
        // },

        // {
        //     id: 7,
        //     status: 1, 
        //     title: 'Tai cuộn lưỡi',
        //     category: 'Món mặn',
        //     img: './assets/img/products/tai-cuon-luoi.jpeg',
        //     price: 340000,
        //     desc: 'Tai heo được cuộn bên trong cùng phần thịt lưỡi heo. Phần tai bên ngoài giòn dai, phần thịt lưỡi bên trong vẫn mềm, có độ ngọt tự nhiên của thịt. Tai cuộn lưỡi được chấm với nước mắm và tiêu đen.'
        // },

        // {
        //     id: 8,
        //     status: 1, 
        //     title: 'Xíu mại tôm thịt 10 viên',
        //     img: './assets/img/products/xiu_mai_tom_thit_10_vien.jpg',
        //     category: 'Món mặn',
        //     price: 140000,
        //     desc: 'Quý khách hấp chín trước khi ăn. Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        // },

        // {
        //     id: 9,
        //     status: 1, 
        //     title: 'Trà phô mai kem sữa',
        //     category: "Nước uống",
        //     img: './assets/img/products/tra-pho-mai-kem-sua.jpg',
        //     price: 34000,
        //     desc: 'Món Nước uống vừa béo ngậy, chua ngọt đủ cả mà vẫn có vị thanh của trà.',
        // },
        // {
        //     id: 10,
        //     status: 1, 
        //     title: 'Trà đào chanh sả',
        //     category: "Nước uống",
        //     img: './assets/img/products/tra-dao-chanh-sa.jpg',
        //     price: 25000,
        //     desc: 'Trà đào chanh sả có vị đậm ngọt thanh của đào, vị chua chua dịu nhẹ của chanh và hương thơm của sả.',
        // },
        // {
        //     id: 11,
        //     status: 1, 
        //     title: 'Bánh chuối nướng',
        //     category: 'Món tráng miệng',
        //     img: './assets/img/products/banh-chuoi-nuong.jpeg',
        //     price: 60000,
        //     desc: 'Bánh chuối nướng béo ngậy mùi nước cốt dừa cùng miếng chuối mềm ngon sẽ là Món tráng miệng phù hợp với mọi người.'
        // },
        // {
        //     id: 12,
        //     status: 1, 
        //     title: 'Há cảo sò điệp (10 viên)',
        //     img: './assets/img/products/ha_cao.jpg',
        //     category: 'Món mặn',
        //     price: 140000,
        //     desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        // },
        // {
        //     id: 13,
        //     status: 1, 
        //     title: 'Chả rươi (100gr)',
        //     img: './assets/img/products/thit_nuong.jpg',
        //     category: 'Món mặn',
        //     price: 60000,
        //     desc: 'Chả rươi luôn mang đến hương vị khác biệt và "gây thương nhớ" hơn hẳn so với các loại chả khác. Rươi béo càng ăn càng thấy ngậy. Thịt thơm quyện mùi thì là và vỏ quýt rất đặc sắc. Chắc chắn sẽ là một món ăn rất hao cơm'
        // },
        // {
        //     id: 14,
        //     status: 1, 
        //     title: 'Nộm gà Hội An (1 phần)',
        //     img: './assets/img/products/nom_ga_hoi_an.png',
        //     category: 'Món mặn',
        //     price: 60000,
        //     desc: 'Nộm gà làm từ thịt gà ri thả đồi. Thịt gà ngọt, săn được nêm nếm vừa miệng, bóp thấu với các loại rau tạo thành món nộm thơm ngon, đậm đà, giải ngán hiệu quả.'
        // },
        // {
        //     id: 15,
        //     status: 1, 
        //     title: 'Set bún cá (1 set 5 bát)',
        //     img: './assets/img/products/set_bun_ca.jpg',
        //     category: 'Món mặn',
        //     price: 60000,
        //     desc: 'Bún cá được làm đặc biệt hơn với cá trắm lọc xương và chiên giòn, miếng cá nhúng vào nước dùng ăn vẫn giòn dai, thơm ngon vô cùng.'
        // },
        // {
        //     id: 16,
        //     status: 1, 
        //     title: 'Bún cá (1 phần)',
        //     img: './assets/img/products/set_bun_ca.jpg',
        //     category: 'Món mặn',
        //     price: 60000,
        //     desc: 'Bún cá được làm đặc biệt hơn với cá trắm lọc xương và chiên giòn, miếng cá nhúng vào nước dùng ăn vẫn giòn dai, thơm ngon vô cùng'
        // },
        // {
        //     id: 17,
        //     status: 1, 
        //     title: 'Xôi trắng hành phi (1 phần)',
        //     img: './assets/img/products/bun_ca_hanh_phi.jpeg',
        //     category: 'Món mặn',
        //     price: 60000,
        //     desc: 'Bún cá được làm đặc biệt hơn với cá trắm lọc xương và chiên giòn, miếng cá nhúng vào nước dùng ăn vẫn giòn dai, thơm ngon vô cùng'
        // },
        // {
        //     id: 18,
        //     status: 1, 
        //     title: 'Tôm sú lột rang thịt (1 phần)',
        //     img: './assets/img/products/tom_su_luot_ran_thit.png',
        //     category: 'Món mặn',
        //     price: 60000,
        //     desc: 'Tôm sú tươi rim với thịt. rim kỹ, vừa lửa nên thịt và tôm săn lại, ngấm vị, càng ăn càng thấy ngon.'
        // },
        // {
        //     id: 19,
        //     status: 1, 
        //     title: 'Bánh cookie dừa',
        //     img: './assets/img/products/banh_cookie_dua.jpeg',
        //     category: 'Món mặn',
        //     price: 130000,
        //     desc: 'Bánh cookie dừa ngọt vừa miệng, dừa bào tươi nhào bánh nướng giòn tan, cắn vào thơm lừng, giòn rụm'
        // },
        // {
        //     id: 20,
        //     status: 1, 
        //     title: 'Cá chiên giòn sốt mắm Thái',
        //     img: './assets/img/products/sot_mam_thai.jpeg',
        //     category: 'Món mặn',
        //     price: 130000,
        //     desc: 'Bánh cookie dừa ngọt vừa miệng, dừa bào tươi nhào bánh nướng giòn tan, cắn vào thơm lừng, giòn rụm'
        // },
        // {
        //     id: 21,
        //     status: 1, 
        //     title: 'Tôm sú rang muối (1 suất)',
        //     category: 'Món mặn',
        //     img: './assets/img/products/tom-su-rang-muoi.jpeg',
        //     price: 550000,
        //     desc: 'Từng chú tôm sú được chọn lựa kĩ càng mỗi ngày, đảm bảo là tôm tươi sống, vẫn còn đang bơi khỏe. Tôm rang muối vừa đậm đà lại vẫn giữ được vị ngọt tự nhiên của tôm sú.'
        // },
        // {
        //     id: 22,
        //     status: 1, 
        //     title: 'Tôm sú rang bơ tỏi (1 suất)',
        //     category: 'Món mặn',
        //     img: './assets/img/products/tom-su-rang-bo-toi.jpeg',
        //     price: 550000,
        //     desc: 'Tôm được chiên vàng giòn bên ngoài, bên trong thịt tôm vẫn mềm, kết hợp cùng sốt bơ tỏi thơm nức . Tôm tươi được Bếp Hoa chiên theo bí quyết riêng nên phần thịt tôm bên trong sẽ có hương vị thơm ngon đặc biệt, sốt bơ tỏi béo ngậy hấp dẫn. Ăn kèm bánh mỳ rất hợp'
        // },

        // {
        //     id: 23,
        //     status: 1, 
        //     title: 'Combo Vịt quay và gỏi vịt',
        //     category: 'Món mặn',
        //     img: './assets/img/products/combo-vitquay-va-goivit.jpeg',
        //     price: 510000,
        //     desc: 'Combo vịt quay Bếp Hoa + gỏi vịt bắp cải size đại cực kỳ thích hợp cho những bữa ăn cần nhiều rau, nhiều đạm mà vẫn đảm bảo ngon miệng. Vịt quay chuẩn Macao giòn da thấm thịt, thêm phần gỏi vịt chua chua ngọt ngọt, rau tươi giòn ăn chống ngán, cân bằng dinh dưỡng.'
        // },

        // {
        //     id: 24,
        //     status: 1, 
        //     title: 'Set cá cơm tầm',
        //     img: './assets/img/products/set_ca_tam.jpg',
        //     category: 'Món mặn',
        //     price: 950000,
        //     desc: 'Một 1 set với 3 món ngon mỹ mãn đủ 4 người ăn no, bếp trưởng tự tay chọn từng con cá tầm tươi đủ chất lượng để chế biến đủ 3 món gỏi, nướng, canh chua 10 điểm cho chất lượng.'
        // },
        // {
        //     id: 25,
        //     status: 1, 
        //     title: 'Chả ốc 1 phần',
        //     img: './assets/img/products/cha_oc_1_phan.jpeg',
        //     category: 'Món mặn',
        //     price: 350000,
        //     desc: 'Chả ốc với ốc giòn tan, băm rối, trộn với thịt, lá lốt, rau thơm, nêm nếm vừa ăn và viên tròn, chiên cho giòn ngoài mềm trong. Ăn chả ốc kẹp với rau sống và chấm mắm chua ngọt cực kỳ đưa vị.'
        // },

        // {
        //     id: 26,
        //     status: 1, 
        //     title: 'Gà ủ muối thảo mộc (1 con)',
        //     category: 'Món mặn',
        //     img: './assets/img/products/ga-u-muoi-thao-moc.png',
        //     price: 450000,
        //     desc: 'Gà ủ muối tuyển chọn từ gà ri tươi, ủ muối chín tới với gia vị thảo mộc tự nhiên, da gà mỏng, thịt chắc ngọt.'
        // },

        // {
        //     id: 27,
        //     status: 1, 
        //     title: 'Gà không lối thoát (1 con)',
        //     category: 'Món mặn',
        //     img: './assets/img/products/ga-khong-loi-thoat.png',
        //     price: 520000,
        //     desc: 'Gà mái ghẹ size 1.4kg sơ chế sạch sẽ, tẩm ướp gia vị đậm đà, bọc vào trong xôi dẻo từ nếp cái hoa vàng, chiên cho giòn mặt ngoài. Khi ăn cắt phần xôi là gà thơm ngon nghi ngút khói, thịt gà ngấm mềm thơm, miếng xôi ngọt tự nhiên từ thịt gà ăn cực kỳ hấp dẫn.'
        // },

        // {
        //     id: 28,
        //     status: 1, 
        //     title: 'Cá chiên giòn mắm Thái (1 con)',
        //     category: 'Món mặn',
        //     img: './assets/img/products/ca-chien-gion-mam-thai.jpeg',
        //     price: 350000,
        //     desc: 'Cá tươi bếp làm sạch, lạng đôi, ướp cho ngấm và chiên vàng giòn. Thịt cá bên trong óng ánh nước, mềm ngọt, bên ngoài giòn tan hấp dẫn. Thêm sốt mắm Thái đầu bếp làm công thức riêng, vị mắm chua ngọt cay the cực kỳ hợp với cá giòn nóng hổi.'
        // },

        // {
        //     id: 29,
        //     status: 1, 
        //     title: 'Chân giò chiên giòn mắm Thái',
        //     category: 'Món mặn',
        //     img: './assets/img/products/chan-gio-chien-gion-mam-thai.jpeg',
        //     price: 420000,
        //     desc: 'Chân giò lợn đen chọn loại ngon, tỉ lệ nạc mỡ đều đặn, bếp xâm bì cẩn thận và ướp thật ngon, chiên vàng giòn nổi bóng, khi ăn chấm mắm chua ngọt cay cay cực kỳ ngon miệng.'
        // },

        // {
        //     id: 30,
        //     status: 1, 
        //     title: 'Chả cốm (500gr)',
        //     category: 'Món mặn',
        //     img: './assets/img/products/cha-com.png',
        //     price: 175000,
        //     desc: 'Cốm mộc làng Vòng hạt dẹt dẻo và thơm đặc biệt, thịt lợn tươi phải chọn phần thịt vai xay vừa mềm lại không bở, trộn đều với cốm, nêm với mắm ngon, gia vị đơn giản và quật hỗn hợp thịt xay và cốm đến khi nào thật chắc và dẻo. Viên mỗi bánh chả phải đều tay, hấp sơ qua cho thành hình, khi ăn mới chiên vàng. Chả cốm khi cắn vào phải giòn và lại thật mềm, tứa nước trong miệng. Cốm dẻo dẻo cuộn trong thịt thơm ngon lạ kỳ.'
        // },

        // {
        //     id: 31,
        //     status: 1, 
        //     title: 'Vịt om sấu (1 hộp)',
        //     category: 'Món mặn',
        //     img: './assets/img/products/vit-om-sau.jpeg',
        //     price: 350000,
        //     desc: '[Mỗi phần có 1,2kg thịt vịt]. Vịt om sấu với thịt vịt mềm thơm, nấu với trái sấu, sả cây, ớt tươi cho ra phần nước om chua thanh và rất thơm. Dùng vịt om sấu với rau mùi tàu, rau thơm và bún rất ngon.'
        // },

        // {
        //     id: 32,
        //     status: 1, 
        //     title: 'Giò xào (1kg)',
        //     category: 'Món mặn',
        //     img: './assets/img/products/gio-xao.jpeg',
        //     price: 460000,
        //     desc: 'Giò xào Bếp Hoa đặc biệt được xào khô, ép chặt để tạo độ giòn. Nguyên liệu chính được làm từ tai và lưỡi heo. Khi ăn giò xào, bạn sẽ cảm nhận từng miếng giò vừa giòn vừa thơm lừng mùi tiêu đen và nước mắm.'
        // },

        // {
        //     id: 33,
        //     status: 1, 
        //     title: 'Nem tai (1 hộp)',
        //     category: 'Món mặn',
        //     img: './assets/img/products/nem-tai.jpeg',
        //     price: 200000,
        //     desc: 'Nem tai giòn sần sật, trộn với thính gạo rang thơm, ăn kèm lá sung bùi bùi, chấm tương ớt hoặc nước chấm đặc điệt, công thức chỉ riêng Bếp Hoa có.'
        // },

        // {
        //     id: 34,
        //     status: 1, 
        //     title: 'Canh dưa bò hầm (1 hộp)',
        //     category: 'Món mặn',
        //     img: './assets/img/products/canh-dua-bo-ham.jpeg',
        //     price: 270000,
        //     desc: 'Canh dưa chua hầm nhừ với thịt nạm bò và gân bò. Thơm - ngon - ngọt - béo - chua dịu thanh thanh'
        // },

        // {
        //     id: 35,
        //     status: 1, 
        //     title: 'Nạc nọng heo nướng kèm xôi trắng (500gr)',
        //     category: 'Món mặn',
        //     img: './assets/img/products/nac-nong-heo-nuong-kem-xoi-trang.jpeg',
        //     price: 300000,
        //     desc: 'Nọng heo - phần thịt ngon nhất trên thủ heo, với những dải thịt nạc mỡ đan xen, mỗi thủ chỉ có được 1-2kg thịt nọng ngon mềm như vậy. Bếp trưởng Bếp Hoa tẩm ướp thật ngấm gia vị, nướng thẳng trên than hoa thơm nức, xém cạnh đẹp mắt. Miếng thịt nướng xong gắp khỏi vỉ vẫn thấy mỡ thơm còn sôi trên dải thịt, để thịt nghỉ vài phút khi thái ra óng ánh nước, gắp miếng thịt chấm với nước sốt siêu ngon độc quyền của Bếp, ngon đến tứa nước miếng, tranh nhau gắp sạch đĩa'
        // },

        // {
        //     id: 36,
        //     status: 1, 
        //     title: 'Thịt quay (400gr)',
        //     category: 'Món mặn',
        //     img: './assets/img/products/thit-quay.jpeg',
        //     price: 280000,
        //     desc: 'Thịt lợn quay thơm mùi lá mắc mật. Ngoài bì giòn rụm, thịt bên trong mềm, hương vị đậm đà. Đặc biệt, bếp có loại sốt chấm thịt được pha bằng công thức riêng biệt chỉ Bếp Hoa mới có.Hướng dẫn sử dụng: Sử dụng ngay trong ngày. Bảo quản trong tủ mát.'
        // },

        // {
        //     id: 37,
        //     status: 1, 
        //     title: 'Khâu nhục',
        //     category: 'Món mặn',
        //     img: './assets/img/products/khau-nhuc.jpeg',
        //     price: 280000,
        //     desc: 'Khâu nhục - món ăn cầu kỳ mang phong vị phương Bắc. Làm từ thịt lợn ta, khâu khục được hấp cách thủy trong 6 tiếng cùng với rất nhiều loại gia vị. Thịt mềm nhừ, ngọt vị, phần bì trong và dẻo quẹo. Mỡ ngậy ngậy tan chảy ngay khi vừa đưa lên miệng. Hướng dẫn bảo quản: Hâm nóng lại bằng nồi hấp cách thủy hoặc lò vi sóng. Bảo quản trong tủ mát từ 3-5 ngày.'
        // },
        // {
        //     id: 38,
        //     status: 1, 
        //     title: 'Xíu mại tôm thịt ( 10 viên)',
        //     category: 'Món mặn',
        //     img: './assets/img/products/ha_cao_tom_thit.jpg',
        //     price: 140000,
        //     desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        // },
        // {
        //     id: 39,
        //     status: 1, 
        //     title: 'Chè hương cốm lá dứa',
        //     category: 'Món tráng miệng',
        //     img: './assets/img/products/che-com-la-dua.jpeg',
        //     price: 60000,
        //     desc: 'Chè cốm hương lá dứa dẻo thơm, ngọt dịu, từng hạt cốm thoảng thoảng đâu đó hương lá dứa mát lành'
        // },

        // {
        //     id: 40,
        //     status: 1, 
        //     title: 'Bánh bông lan chanh dây',
        //     category: 'Món tráng miệng',
        //     img: './assets/img/products/banh-bong-lan-chanh-day.jpeg',
        //     price: 50000,
        //     desc: 'Bánh bông lan chanh dây với vị chua nhẹ, không bị ngọt gắt hẳn sẽ là sự lựa chọn hoàn hảo'
        // },

        // {
        //     id: 41,
        //     status: 1, 
        //     title: 'Chè bưởi',
        //     category: 'Món tráng miệng',
        //     img: './assets/img/products/che-buoi.jpeg',
        //     price: 50000,
        //     desc: 'Chè bưởi rất dễ ăn bởi hương vị ngọt mát, thơm ngon, vị bùi bùi của đậu xanh, giòn sần sật của cùi bưởi mà không hề bị đắng'
        // },
        // {
        //     id: 42,
        //     status: 1, 
        //     title: 'Set lẩu Thái tomyum',
        //     category: "Món lẩu",
        //     img: './assets/img/products/lau-thai-tomyum.jpeg',
        //     price: 699000,
        //     desc: 'Lẩu Thái là món ăn xuất phát từ món canh chua Tom yum nổi tiếng của Thái Lan. Nước lẩu có hương vị chua chua cay cay đặc trưng. Các món nhúng lẩu gồn thịt bò, hải sản, rau xanh và các loại nấm.',
        // },
        // {
        //     id: 43,
        //     status: 1, 
        //     title: 'Set lẩu Thái nấm chay',
        //     category: "Món lẩu",
        //     img: './assets/img/products/lau-thai-nam-chay.png',
        //     price: 550000,
        //     desc: 'Một set lẩu Thái nấm chay với nước dùng 100% từ rau củ quả tự nhiên, thêm sả cây tươi, riềng miếng, ớt, nước dừa để lên được vị nước lẩu Thái chuẩn vị. Đồ nhúng đa dạng với nhiều loại nấm khác nhau, rau tươi giòn, đậu phụ mềm xốp, váng đậu amla chiên giòn. Kèm bún tươi ăn rất hợp.',
        // },
        // {
        //     id: 44,
        //     status: 1, 
        //     title: 'Đậu hũ xào nấm chay',
        //     category: "Tép Màu",
        //     img: './assets/img/products/dau-hu-xao-nam-chay.png',
        //     price: 220000,
        //     desc: 'Món xào thanh nhẹ ngọt lịm từ rau củ và nấm tươi, thêm chút đậu phụ chiên thái miếng, nêm nếm đậm đà. Ăn kèm cơm trắng hay làm bún trộn rau củ cũng rất hợp.',
        // },
        // {
        //     id: 45,
        //     status: 1, 
        //     title: 'Bún trộn chay (1 suất)',
        //     category: "Tép Màu",
        //     img: './assets/img/products/bun-tron-chay.png',
        //     price: 75000,
        //     desc: 'Bún trộn chay tưởng là quen mà ăn ngon lạ miệng. Với bún tươi được trộn với nước tương và sốt ớt đặc biệt, mắm chay thơm, thêm rau củ tươi, rau thơm bắt vị, nấm xào săn, đậu phụ thái lát, một món thanh nhẹ thích hợp ăn trưa hoặc để dành cho anh chị eat-clean bữa tối.',
        // },
        // {
        //     id: 46,
        //     status: 1, 
        //     title: 'Bún riêu chay (1 suất)',
        //     category: "Tép Màu",
        //     img: './assets/img/products/bun-rieu-chay.png',
        //     price: 75000,
        //     desc: 'Bún riêu chay với phần gạch cua chay từ đậu phụ non mềm đánh với sốt màu thơm ngon. Nước dùng thanh nhẹ từ rau củ quả, được nấu lên vị đậm đà rất ngon miệng. Một phần bún riêu kèm với gạch cua là giò chay, đậu phụ rán, rau sống ngọt giòn và tương ớt chay sánh ngon.',
        // },
        // {
        //     id: 47,
        //     status: 1, 
        //     title: 'Miến xào rau củ chay',
        //     category: "Tép Màu",
        //     img: './assets/img/products/mien-xao-rau-cu-chay.png',
        //     price: 170000,
        //     desc: 'Sợi miến khoai lang bếp ngâm cho mềm, xào kèm rau củ quả tươi theo mùa, nêm cùng nước tương và dầu mè, một món xào chay vừa mát lành lại thơm ngon.',
        // },
        // {
        //     id: 48,
        //     status: 1, 
        //     title: 'Cuốn nấm chay (10 cuốn)',
        //     category: "Tép Màu",
        //     img: './assets/img/products/cuon-nam-chay.png',
        //     price: 120000,
        //     desc: 'Nấm tươi làm chín cuộn với bánh phở và rau bào, thêm đậu phụ chiên giòn thái chân hương đưa vị, chấm mắm chua ngọt chay bếp trưởng pha chế, một món ngon làm món khai vị rất hợp.',
        // },
        // {
        //     id: 49,
        //     status: 1, 
        //     title: 'Xôi xéo',
        //     category: "Tép Màu",
        //     img: './assets/img/products/xoi-xeo.png',
        //     price: 80000,
        //     desc: 'Xôi xéo đậu xanh bếp dùng nếp cái hoa vàng hạt mẩy, ngâm với nước nghệ và đồ 2 lần cho hạt nếp chín mềm và thơm, đậu xanh sên mịn cắt tơi trộn cùng xôi, khi ăn rắc hành phi đưa vị, rất hấp dẫn.',
        // },
        // {
        //     id: 50,
        //     status: 1, 
        //     title: 'Chả quế chay',
        //     category: "Tép Màu",
        //     img: './assets/img/products/cha-que-chay.png',
        //     price: 70000,
        //     desc: '',
        // },
        // {
        //     id: 51,
        //     status: 1, 
        //     title: 'Nem chay',
        //     category: "Tép Màu",
        //     img: './assets/img/products/nem-chay.png',
        //     price: 160000,
        //     desc: 'Nem chay thơm ngon, thanh thuần bếp trưởng sử dụng rau củ bào tươi, đậu xanh, khoai môn, miến, mộc nhĩ và nấm hương, tất cả xào thơm cho lên vị, sau đó cuộn với bánh đa nem mỏng, chiên giòn vỏ, chấm mắm chua ngọt chay ăn kèm rau thơm rất hấp dẫn.',
        // },
        // {
        //     id: 52,
        //     status: 1, 
        //     title: 'Bánh tráng trộn',
        //     category: "Món ăn vặt",
        //     img: './assets/img/products/banh-trang-tron.jpg',
        //     price: 20000,
        //     desc: 'Bánh tráng trộn là món ăn ngon không chỉ nổi danh đất Sài Thành mà ngay khi xuất hiện tại Hà Nội, nó cũng đã trở thành món ăn “hot trend” rất được giới trẻ yêu thích. ',
        // },
        // {
        //     id: 53,
        //     status: 1, 
        //     title: 'Bánh tráng nướng',
        //     category: "Món ăn vặt",
        //     img: './assets/img/products/banh-trang-nuong.jpg',
        //     price: 10000,
        //     desc: 'Khác với món bánh tráng trộn, bánh tráng nướng được phết một lớp trứng chút lên bề mặt bánh tráng cùng thịt băm, mỡ hành, nướng đến khi có màu vàng ruộm. ',
        // },
        // {
        //     id: 54,
        //     status: 1, 
        //     title: 'Ốc thập cẩm (1 suất)',
        //     category: "Món ăn vặt",
        //     img: './assets/img/products/oc-thap-cam.jpg',
        //     price: 50000,
        //     desc: 'Được chế biến đủ các món ốc ngon khác nhau, như: ốc hấp, ốc luộc, ốc xào, ốc bỏ lò,.. với đủ các gia vị như tỏi, hành, ớt, tiêu, rau răm,…',
        // },
        // {
        //     id: 55,
        //     status: 1, 
        //     title: 'Cơm cháy chà bông',
        //     category: "Món ăn vặt",
        //     img: './assets/img/products/com-chay-cha-bong.jpg',
        //     price: 60000,
        //     desc: 'Cơm cháy chà bông có thể bảo quản cả tháng mà ăn vẫn ngon và đóng gói rất tiện.',
        // },
        // {
        //     id: 56,
        //     status: 1, 
        //     title: 'Phá lấu (1 suất)',
        //     category: "Món ăn vặt",
        //     img: './assets/img/products/pha-lau.jpg',
        //     price: 99000,
        //     desc: 'Cứ mỗi lần hỏi “Ăn gì ở Sài Gòn ngon, rẻ ?” là người ta nhớ ngay món phá lấu.',
        // },
        // {
        //     id: 57,
        //     status: 1, 
        //     title: 'Bột chiên (1 suất)',
        //     category: "Món ăn vặt",
        //     img: './assets/img/products/bot-chien.jpg',
        //     price: 49000,
        //     desc: 'Cùng với nước chấm đặc biệt, bột chiên để lại hương vị khó tả cho thực khách sau khi thưởng thức.',
        // },
        // {
        //     id: 58,
        //     status: 1, 
        //     title: 'Gỏi khô bò (1 suất)',
        //     category: "Món ăn vặt",
        //     img: './assets/img/products/goi-bo-kho.jpg',
        //     price: 60000,
        //     desc: 'Thơm ngon đến từng sợi bò.',
        // },
        // {
        //     id: 59,
        //     status: 1, 
        //     title: 'Hoành thánh tôm (10 viên)',
        //     img: './assets/img/products/hoanh_thanh.jpg',
        //     category: 'Món mặn',
        //     price: 130000,
        //     desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        // },
        // {
        //     id: 60,
        //     status: 1, 
        //     title: 'Nước ép dâu tây',
        //     img: './assets/img/products/nuoc-ep-dau-tay.jpg',
        //     category: 'Nước uống',
        //     price: 100000,
        //     desc: 'Dâu tây ăn nguyên quả ngon ngọt, có cả quả dôn dốt chua, màu đỏ mọng trông cực yêu. Không chỉ ngon miệng mà đồ uống từ dâu tây còn có công dụng bảo vệ sức khỏe, sáng mắt, đẹp da, thon gọn vóc dáng. Làm giảm nguy cơ mắc bệnh về mỡ máu, chống viêm,…'
        // },
        {
          "id": 16,
          "title": "Blue Diamond",
          "img": "./assets/img/products/bluediamon.jpg",
          "category": "Tép Màu",
          "price": "40000",
          "desc": "Tép Blue Diamond thu hút ánh nhìn bằng màu xanh đen  có tông đậm, gợi nhớ đến sâu biển với vẻ đẹp ma mị và cuốn hút người chơi. đồng thời tạo ra sự đa dạng trong hình dáng của chúng.\nLoài tép này bắt nguồn từ tép Chocolate trong các bể lai tạo. Những cá thể ban đầu đã trải qua những đột biến để tạo ra các con Black Rili, mở ra một thế giới mới trong việc nuôi tép với sự đa dạng và phong phú hơn.\nThông số nuôi\nĐộ PH: 6.5 – 7.5\nĐộ GH: 5-7\nĐộ TDS: 180-200\nNhiệt độ (độ C): 27 – 29",
          "status": 1
        },
        {
          "id": 15,
          "title": "Sulawesi White Sock",
          "img": "./assets/img/products/chantrang.jpg",
          "category": "Tép Sulaweshi",
          "price": "20000",
          "desc": "Tép Sula Chân Trắng là một trong những dòng tép sula quốc dân , được anh em săn đón bởi ngoại hình đặc sắc ,Tép khoắc lên mình màu đỏ hoặc đen và đuợc tô điểm bởi chấm bi màu trắng làm cho tổng thể màu sắc cực kì cuốn hút và điểm đặc biệt của dòng tép này là đôi chân trắng đầy ma mị , khi quen hồ thì các bạn sẽ thấy chúg đảo chân kiếm ăn nhìn rất là hay 🥰\nThông số nuôi tép sula chân trắng:\npH : 7.5-8.5\nNhiệt độ : 26-31 độ C\nGh: 7-9\nNo3: 0",
          "status": 1
        },
        {
          "id": 14,
          "title": "Socola ",
          "img": "./assets/img/products/socola.jpg",
          "category": "Tép Màu",
          "price": "10000",
          "desc": "là một loài cải tiến từ loài Neocaridina denticulata var. Loài tép này có nguồn gốc xuất xứ từ Đài Loan, Thái Lan và dần trở thành loài sinh vật được nhiều người yêu thích bởi màu sắc đặc trưng của loại kẹo socola , với một số cá thể có màu đen tuyền nhưng đa phần là màu nâu socola . khi thả vào hồ thủy sinh thì rất nỗi bật , màu nâu đậm nổi bật và chúng dễ thích nghi với môi trường và nhiệt độ vùng nhiệt đới như Việt Nam\nThông số tối ưu để tép phát triển tốt nhất :\n- Nhiệt độ: 26-30 độ Celsius\n- pH: 6,5 - 7,5\n- Độ cứng của nước (GH): 5-7\n- TDS: 150-250",
          "status": 1
        },
        {
          "id": 13,
          "title": "White Orchid",
          "img": "./assets/img/products/wo.jpg",
          "category": "Tép Sulaweshi",
          "price": "15000",
          "desc": "Được dịch đến với tên gọi Tép Sula Phong Lan Trắng nhưng tên mà anh em biết đến nhiều nhất là WO. Xuất xứ từ hồ Malili thuộc vùng đảo Sulawesi của Indonesia, loài tép này mang trong mình vẻ đẹp độc đáo với nhiều chấm đen khắp cơ thể, râu và mắt màu cam , thân hình trong.\nTép Sulawesi White Orchid thích môi trường :\npH cao 7.5-8.5\nnhiệt độ :26 - 30 độ C.\nGh : 7-9\nNo3: 0",
          "status": 1
        },
        {
          "id": 12,
          "title": "Orange Shrimp 🍊",
          "img": "./assets/img/products/tepcam.jpg",
          "category": "Tép Màu",
          "price": "8000",
          "desc": "Hay được gọi là Tépcam Thuộc họ neocaridina với màu cam sáng hơi ánh vàng , hay được mọi người so sánh như một quả cam vì thế cái tên #Orangeshrimp ra đời ,có xuất phát từ Đài Loan, là điểm nhấn trong bể thủy sinh với vẻ đẹp tự nhiên và dễ chăm sóc. Dòng tép này không chỉ là một lựa chọn thú vị cho bể mà còn là một dòng tép nên có trong bộ sưu tập tép cảnh của người chơi .\nKhuyến nghị: Nên nuôi riêng một dòng gen này để bảo tồn tránh mất màu .\nThông số nuôi tương tự như các loại tép màu thuộc họ Neocaridina khác:\n- Nhiệt độ: 26-30 độ Celsius\n- pH: 6,5 - 7,5\n- Độ cứng của nước (GH): 5-7\n- TDS: 150-250",
          "status": 1
        },
        {
          "id": 11,
          "title": "Green jade",
          "img": "./assets/img/products/greenjade.jpg",
          "category": "Tép Màu",
          "price": "35000",
          "desc": "Hay còn gọi là Tép Ngọc Lục Bảo 🍃một trong những biến thể màu mới của loài Neocaridina. Chúng được tạo ra thông qua quá trình lai tạo chọn lọc từ Tép Red Cherry, đã tạo ra các bé Green Jade này . Đặc điểm của Tép Green Jade là màu sắc đa dạng, từ các đốm xanh lá cây sáng và sọc trên nền màu vàng mờ cho đến các tông màu xanh lục khác nhau. Một số cá thể có màu xanh lục nhạt, trong khi những con khác lại có màu ngọc lục bảo đậm hơn.\nTép con sinh ra có màu xanh lợt, chúng càg lớn thì màu sắc càng đậm theo 🤓\nLưu ý: Đảm bảo nước mới có cùng thông số với nước trong bể.\n\nThông số nuôi :\n- Nhiệt độ: 26-30 độ Celsius\n- pH: 6,5 - 7,5\n- Độ cứng của nước (GH): 5-7\n- TDS: 150-250",
          "status": 1
        },
        {
          "id": 10,
          "title": "Sulawesi Yellow Cheek ",
          "img": "./assets/img/products/cheeck.jpg",
          "category": "Tép Sulaweshi",
          "price": "50000",
          "desc": "Tép Yellow Cheek, hay còn được gọi là tép Sulawesi má vàng, là một loại tép cá nhân hấp dẫn với vẻ ngoài độc đáo và màu sắc bắt mắt. Với cơ thể được phủ màu đỏ sậm hoặc màu vàng đậm, và được trang trí bởi các sọc và dấu chấm màu vàng từ đầu đến đuôi, Xuất xứ từ Hồ Towuti trên đảo Sulawesi của Indonesia, chúng là sản phẩm của môi trường nước ngọt đặc biệt nàyđây là dòng tép hạng cao , yêu cầu khả năng duy trì của người chơi , thông số của môi trường nuôi phải có thông số chuẩn và một hệ vi sinh mạnh đó là lý do tại sao mà làm cho #tépYellowCheek trở thành mục tiêu để người chơi chinh phục",
          "status": 1
        },
        {
          "id": 9,
          "title": "Sulawesi Tigri",
          "img": "./assets/img/products/sulatigri.jpg",
          "category": "Tép Sulaweshi",
          "price": "60000",
          "desc": "Tép Sulawesi Tigri là loài có ngoại hình tương tự như cọp, với sự phong phú về màu sắc từ đỏ, cam, vàng đến đen và trắng. Sự đa dạng màu sắc này tạo nên một bức tranh tươi sáng, sống động trong bể thủy sinh.\nXuất xứ đặc biệt: Tép Sulawesi Tigri tồn tại tự nhiên trên đảo Sulawesi, Indonesia, nơi có môi trường nước ngọt độc đáo và cảnh quan thiên nhiên tuyệt vời.\nSulawesi Tigri là dòng tép có độ khó tầm trung và yêu cầu môi trường hệ vi sinh ổn định : \n+nhiệt độ: 26-31 độ\n+ pH 8-8.5\n+Tds: 150-190\n+ gH 6-9\n+No3: 0",
          "status": 1
        },
        {
          "id": 8,
          "title": "Goldenback Yellow ",
          "img": "./assets/img/products/vangdai.jpg",
          "category": "Tép Màu",
          "price": "12000",
          "desc": "Hay còn được mọi người biết đến với tên thân thuộc \"Tép Vàng Sọc Đài\" không chỉ đẹp mắt mà còn đặc biệt với sọc vàng kéo dài từ đầu tới đuôi tạo nên giá trị của nó. Tép có tính cách hòa đồng và thân thiện, làm cho chúng trở thành lựa chọn lý tưởng cho những người mới tập chơi bể thủy sinh. Điều này là do chúng thường sống hòa mình trong đàn, tạo nên một cảm giác an ninh và yên bình trong bể cá. Tính cách hòa đồng này không chỉ giúp chúng tương thích tốt với các loại cá khác mà còn làm cho quá trình chăm sóc trở nên thú vị hơn.Thông số nuôi tương tự như các loại tép màu thuộc họ Neocaridina khác:\n- Nhiệt độ: 26-30 độ Celsius\n- pH: 6,5 - 7,5\n- Độ cứng của nước (GH): 5-7\n- TDS: 150-250",
          "status": 1
        },
        {
          "id": 7,
          "title": "Blue Dream",
          "img": "./assets/img/products/bluedream.jpg",
          "category": "Tép Màu",
          "price": "13000",
          "desc": "Blue Dream - Tép xanh da trời là dòng tép phổ biến nhất tại thị trường Việt Nam được người chơi tép yêu thích. Màu sắc của chúng có thể biến đổi từ xanh lam đậm đến xanh lam nhạt, tạo ấn tượng mạnh mẽ. Đây là loại tép dễ nuôi và chăm sóc, không đòi hỏi nghiêm ngặt về chất lượng nước:\nđộ pH: từ 6,5 đến 7,5,\n(TDS): 120 đến 250\nnhiệt độ: từ 18 đến 26 độ C.",
          "status": 1
        },
        {
          "id": 6,
          "title": "Sulawesi Boxer",
          "img": "./assets/img/products/sulawesiboxer.jpg",
          "category": "Tép Sulaweshi",
          "price": "50000",
          "desc": "tép sula boxer tuy không đẹp về màu sắc nhưng điểm đặc biệt của dòng tép này là nó biết múa quạt, rất dễ nuôi, thích nghi với môi trường tốt tuy nhiên tép con lâu lớn \nThông số nuôi:\npH: 7,4-8,4\nNhiệt độ: 26-31\nTDS: 80-140\nKH: 0-6\nGH: 4-9",
          "status": 1
        },
        {
          "id": 5,
          "title": "Dark Bloody",
          "img": "./assets/img/products/dark-bloody.jpg",
          "category": "Tép Màu",
          "price": "45000",
          "desc": "Tép này là một loài khá đặc biệt trong họ Bloody Mary. Điểm đặc biệt của chúng bao gồm:\n- Tép có một màu đỏ rất là ma mị được tạo ra do quá trình lai tạo, tuyển chọn cá thể ưu tú qua nhiều đời để có màu sắc đẹp như vậy 😍, Tép con mới nở thường có màu xanh lam (ban đầu tôi nhìn như loạn màu ),tuy nhiên đừg quá lo vì màu đỏ sẽ gia tăng theo thời gian , tép càng lớn thì màu đỏ càng đậm và tạo ra màu đen ánh đỏ như hiện tại.\n- Chúng có thể được nuôi chung với các loại Bloody Mary khác, nhưng sau một thời gian tép con sẽ không ra được màu đen ánh đỏ , chỉ ra màu Bloody Marry\n- Do có màu đặc biệt , nên không đánh giá chúng là chất lượng A hoặc S, mà sẽ gọi chúng là #DarkBloodyMary. Mỗi sự đột phá đều mang lại giá trị riêng của nó.\nKhuyến nghị: Nên nuôi riêng một dòng gen này để bảo tồn tránh mất màu .\nThông số nuôi tương tự như các loại tép màu thuộc họ Neocaridina khác:\n- Nhiệt độ: 26-30 độ Celsius\n- pH: 6,5 - 7,5\n- Độ cứng của nước (GH): 5-7\n- TDS: 150-250",
          "status": 1
        },
        {
          "id": 61,
          "title": "banner ",
          "img": "./assets/img/products/1213.jpg",
          "category": "Tép màu",
          "price": 10000,
          "desc": "tép cặc",
          "status": 0
        },
        {
          "id": 62,
          "title": " Snow Ball",
          "img": "./assets/img/products/tep-snowball.jpg",
          "category": "Tép Màu",
          "price": 10000,
          "desc": "Tép SnowBallshrimp là một dòng tép được lai tạo và công bố lần đầu cách đây 10 năm bởi người Đức, Những \"Quả cầu tuyết\" này đã tạo ra một cơn sốt trong cộng đồng thủy sinh . Với vẻ đẹp độc đáo của chúng, không giống bất kỳ loài Neocaridina nào khác, Snow Ball thu hút người chơi bởi sự trong trẻo và khả năng nhìn thấy các cơ quan bên trong tép hoạt động . Việc quan sát các cơ quan bên trong tép hoạt động một cách tự nhiên và minh bạch thực sự là một trải nghiệm thú vị và hấp dẫn đối với người chơi thủy sinh.\n\nĐặc biệt, với Snow Ball trứng của dòng tép này có màu trắng 🤩 khác với trứng của các dòng tép khác thường là màu vàng\nKhuyến nghị: Nên nuôi riêng một dòng gen này để bảo tồn tránh mất màu .\nThông số nuôi tương tự như các loại tép màu thuộc họ Neocaridina khác:\n- Nhiệt độ: 26-30 độ Celsius\n- pH: 6,5 - 7,5\n- Độ cứng của nước (GH): 5-7\n- TDS: 150-250",
          "status": 1
        },
        {
          "id": 2,
          "title": "Sulawesi Galaxy",
          "img": "./assets/img/products/tep-galaxy.jpg",
          "category": "Tép Sulaweshi",
          "price": 50000,
          "desc": "Anh em có thể dễ dàng thấy lý do tại sao chúng được gọi như vậy. Tép sula galaxy có màu đen , nâu hoặc đỏ ( một vào cá thể siêu hiếm sẽ có màu xanh dương) trên thân sẽ có châm bi màu trắng\nĐây là dòng tép thuộc có nguồn gốc từ hồ ở Indonesia có khi hậu khá giống nuớc ta nên rất phù hợp cho ae miền nam chơi\nĐặc biệt ở dòng tép này là tép con sẽ sinh ra có thể khác màu với bố mẹ 😂 (vd: tép bố mẹ là màu nâu thì đời con có thể ra màu đen hoặc đỏ 😂) khá hên xuôi nên ae nào thích kiểu đỏ đen sẽ rất thích dòng này\nNgoài ra dòng tép này còn được phân hạng dựa vào màu sắc và châm trên lưng 🤩, màu càng đậm chấm càng to thì được gọi là hạng cao , nhưng cá thể không đạt tiêu chí trên sẽ là hạng thường 😅 nên nói chung là hên xuôi 😜🤪\n👉🏻Thông số nuôi :\n- Nhiệt độ: 26-30 độ\n- pH: 7,5-9\n- Độ cứng của nước (GH): 7-9\n- TDS: 150-180\n- No3: 0\n- Nền : oxyn sand hay sula sand\n- Nước: Ro\n-Khoáng : Sử dụng khoáng sula 7.5 và 8.5",
          "status": 1
        },
        {
          "id": 3,
          "title": "Dark Bloody",
          "img": "./assets/img/products/dark-bloody.jpg",
          "category": "Tép Màu",
          "price": 45000,
          "desc": "Tép này là một loài khá đặc biệt trong họ Bloody Mary. Điểm đặc biệt của chúng bao gồm:\n- Tép có một màu đỏ rất là ma mị được tạo ra do quá trình lai tạo, tuyển chọn cá thể ưu tú qua nhiều đời để có màu sắc đẹp như vậy 😍, Tép con mới nở thường có màu xanh lam (ban đầu tôi nhìn như loạn màu ),tuy nhiên đừg quá lo vì màu đỏ sẽ gia tăng theo thời gian , tép càng lớn thì màu đỏ càng đậm và tạo ra màu đen ánh đỏ như hiện tại.\n- Chúng có thể được nuôi chung với các loại Bloody Mary khác, nhưng sau một thời gian tép con sẽ không ra được màu đen ánh đỏ , chỉ ra màu Bloody Marry\n- Do có màu đặc biệt , nên không đánh giá chúng là chất lượng A hoặc S, mà sẽ gọi chúng là #DarkBloodyMary. Mỗi sự đột phá đều mang lại giá trị riêng của nó.\nKhuyến nghị: Nên nuôi riêng một dòng gen này để bảo tồn tránh mất màu .\nThông số nuôi tương tự như các loại tép màu thuộc họ Neocaridina khác:\n- Nhiệt độ: 26-30 độ Celsius\n- pH: 6,5 - 7,5\n- Độ cứng của nước (GH): 5-7\n- TDS: 150-250",
          "status": 0
        },
        {
          "id": 4,
          "title": "Bloody Marry",
          "img": "./assets/img/products/tepdo.jpg",
          "category": "Tép Màu",
          "price": 15000,
          "desc": "Tép Đỏ Bloody hiện là một trong những loại tép cảnh nước ngọt được ưa chuộng nhất với màu đỏ sắc nét và phong cách độc đáo. Được lai tạo đặc biệt để tạo ra màu sắc nổi bật, BloodyMary trở thành một điểm nhấn lôi cuốn trong bể cá cảnh, thu hút sự chú ý của người chơi tép cảnh trên khắp thế giới.\n\n\n******\nĐặc điểm nhận diện:\n- Với màu đỏ sắc sảo, vỏ chúng rất đẹp mắt mà không có bất kỳ đốm trắng hay bể nào.\n- Phần mũi của chúng ngắn hơn so với một số loại tép khác như Fire Red hoặc Painted Fire Red.\n- Tép con sinh ra đã có màu đỏ , tép càng lớn màu càng đậm 😍\nĐiều kiện môi trường dễ nuôi:\n1. pH: 5.5-8.5 \n2. TDS (Tổng chất rắn hòa tan): 170-220ppm \n3. Nhiệt độ: 21-31 độ C -  nhiệt độ ổn định ở khoảng 26 độ C là lựa chọn tốt.\n4. Gh: 6-8 \nChăm sóc và dinh dưỡng:\n1. Thức ăn: Bloody Mary là loài ưa ăn thức ăn tươi sống như vi sinh vật nước, chất hữu cơ, và thức ăn lành mạnh cho tép cảnh. Đảm bảo cung cấp đa dạng thức ăn để đáp ứng nhu cầu dinh dưỡng.\n2. Môi trường sống: Tạo ra một môi trường sống ổn định với chất lượng nước tốt và nhiều khu vực trú ẩn để chúng cảm thấy an toàn và thoải mái.",
          "status": 1
        },
        {
          "id": 24,
          "title": "Cá Trâm",
          "img": "./assets/img/products/catram.jpg",
          "category": "Cá nuôi với tép",
          "price": "1000",
          "desc": "dễ nuôi ăn tạp , chuyên ăn bọ nước và đặc biệt ko ăn tép con",
          "status": 1
        },
        {
          "id": 23,
          "title": "Chuột Pygmy",
          "img": "./assets/img/products/chuotpygmy.jpg",
          "category": "Cá nuôi với tép",
          "price": "40000",
          "desc": "dễ nuôi ăn tạp , chuyên ăn bọ nước và đặc biệt ko ăn tép con",
          "status": 1
        },
        {
          "id": 22,
          "title": "Tép Sulawesi - Harlaquin",
          "img": "./assets/img/products/hallowinkhanquangco.jpg",
          "category": "Tép Sulaweshi",
          "price": "50000",
          "desc": "Tép Sulawesi Harlequin, hay còn được biết đến với tên gọi \"Khăn Quàng Cổ,\" là một loài tép độc đáo có nguồn gốc từ Hồ Towuti trên đảo Sulawesi.\n Loài tép này nổi bật với các khoang màu rõ rệt, sự pha trộn hài hòa giữa màu trắng và đỏ đậm trên cơ thể. Điểm đặc trưng của Harlequin là khoang màu trắng trên cổ, giống như một chiếc khăn quàng, tạo nên vẻ đẹp riêng biệt và thu hút.\nChân của tép Harlequin có hai màu rõ rệt: phần trên màu trắng, phần dưới màu đỏ, cùng với râu màu đỏ cam nổi bật. Những đặc điểm này làm cho Harlequin trở thành một loài tép rất được ưa chuộng trong cộng đồng chơi tép, nhưng cũng đầy thách thức đối với những người mới.\nHarlequin là một dòng tép khó nuôi, đòi hỏi môi trường sống có hệ vi sinh mạnh và ổn định. Để nuôi và sinh sản thành công, người chơi cần phải có kiến thức sâu rộng về các thông số môi trường, đặc biệt là kiểm soát pH trong bể nuôi. Sự ổn định của các yếu tố này đóng vai trò quan trọng trong việc giúp Harlequin phát triển và sinh sản hiệu quả.",
          "status": 1
        },
        {
          "id": 21,
          "title": "Tép Sulawesi - Red Line",
          "img": "./assets/img/products/redline.jpg",
          "category": "Tép Sulaweshi",
          "price": "50000",
          "desc": "Tép Sulawesi Red Line, còn được gọi là Caridina striata, là một loài tép nổi bật với màu sắc rực rỡ và sự hiện diện thu hút, Tép #SulawesiRedLine có một cơ thể chủ yếu là màu trắng với nhiều sọc đỏ kéo dài từ đầu tới đuôi tạo ra sự tương phản mạnh mẽ và làm nổi bật vẻ đẹp của loài tép này, Mắt của loài tép này cũng rất đặc biệt với sắc đỏ hoặc cam, đồng nhất với màu sắc của các sọc đỏ trên thân. Chân của tép có màu trắng, trong khi đuôi có màu vàng. Rau dài của chúng có màu đỏ, tạo nên một sự kết hợp màu sắc rất ấn tượng.\nYêu Cầu Môi Trường: Tép Sulawesi Red Line yêu cầu một môi trường nuôi dưỡng khá cao cấp và cụ thể. Chúng là loài rất khó nuôi cũng như sinh sản cần có yêu cầu nghiêm ngặt về đổ ổn định thông số nước và điều kiện không khí cùng với  hệ vi sinh siêu cực khỏe nên tép Sulawesi Red Line có thể không phải là lựa chọn tốt nhất cho người mới bắt đầu",
          "status": 1
        },
        {
          "id": 20,
          "title": "Tép Sulawesi - Red Orchid ",
          "img": "./assets/img/products/redorchid.jpg",
          "category": "Tép Sulaweshi",
          "price": "40000",
          "desc": "Tép Red Orchid sở hữu vẻ ngoài tương tự như Tép White Orchid, nhưng điểm khác biệt nổi bật là màu đỏ rực rỡ thay vì trắng trong suốt. Các chấm màu trắng trên cơ thể tạo nên một diện mạo sắc sỡ và thu hút hơn so với người anh em trắng của nó. Về độ khó nuôi, Tép Red Orchid thuộc mức trung bình dễ, yêu cầu hệ vi sinh ổn định và pH nước ổn định để phát triển tốt.",
          "status": 1
        },
        {
          "id": 19,
          "title": "Tép Sulawesi - Red Crystal ",
          "img": "./assets/img/products/redcrystal.jpg",
          "category": "Tép Sulaweshi",
          "price": "50000",
          "desc": "Tép Sulawesi Red Crystal đang dần trở thành một cái tên nổi bật trong cộng đồng người chơi tép sula. Mới xuất hiện trên thị trường, loài tép này nhanh chóng thu hút sự chú ý nhờ toàn thân màu đỏ đậm, nổi bật với các chấm trắng phủ khắp cơ thể, tạo nên một vẻ ngoài vô cùng cuốn hút. \nRed Crystal có nhiều điểm tương đồng với tép Sulawesi Galaxy, dễ gây nhầm lẫn cho những ai chưa có nhiều kinh nghiệm. Tuy nhiên, sự khác biệt đáng chú ý của Red Crystal chính là tỷ lệ đời con giống bố mẹ cao hơn. Đây là một điểm cộng lớn đối với những người muốn duy trì và phát triển dòng tép này, mà không phải lo lắng về sự phân hạng màu sắc khác biệt như ở Galaxy. \nMột trong những lý do chính khiến Red Crystal được ưa chuộng là khả năng thích nghi và sinh sản dễ dàng. Không đòi hỏi nhiều kỹ thuật chăm sóc phức tạp, loài tép này phù hợp cho cả người mới bắt đầu và những ai đã có kinh nghiệm. Chúng phát triển tốt trong môi trường nước ổn định và có thể sinh sản nhanh chóng khi được cung cấp điều kiện sống tối ưu.",
          "status": 1
        },
        {
          "id": 18,
          "title": "Tép Sulawesi Yellow Nose ",
          "img": "./assets/img/products/yellownose.jpg",
          "category": "Tép Sulaweshi",
          "price": "50000",
          "desc": "Tép Sulawesi Yellow Nose, hay còn gọi là Tép Sula Mũi Vàng, là một trong những loài tép thú vị và hấp dẫn dành cho những người yêu thích nuôi tép cảnh. Nhiều ae còn nói vui là tép nhìn giống kiến lửa 🤣🤣 \nĐặc điểm nổi bật:\nNgoại hình đẹp mắt: Tép Sulawesi Yellow Nose Với bộ râu dài, trắng muốt, những chân phụ màu vàng tươi và mũi vàng nổi bật, tạo nên sự khác biệt so với các loại tép khác.\nDễ chăm sóc: Mặc dù có độ khó trung bình, loài tép này khá dễ chăm sóc và thích nghi với điều kiện môi trường ở Việt Nam. Với nhiệt độ từ 26-31 độ C, chúng phát triển và sinh sản rất tốt.",
          "status": 1
        },
        {
          "id": 17,
          "title": "Sulawesi Chân Xanh",
          "img": "./assets/img/products/chanxanh.jpg",
          "category": "Tép Sulaweshi",
          "price": "15000",
          "desc": "Tép Sula Chân Xanh, hay còn gọi là Sulawesi Blue Leg Poso, là một trong những loại tép dễ nuôi nhất  trong các dòng tép sulawesi, đặc biệt với những người mới bắt đầu. \nTép Sulawesi Blue Leg Poso nổi bật với vẻ đẹp tinh tế . Tuy không sở hữu những gam màu rực rỡ như một số dòng tép sula khác, tép Blue Leg Poso gây ấn tượng bằng những đặc điểm hình thái độc đáo:\nThân: Thân của tép có màu trong suốt, tương tự như một lớp pha lê, mang lại vẻ đẹp lấp lánh và tùy một số các thể chọn lọc sẽ có thân màu xanh nhạt.\nKhả Năng Thích Ứng: Tép Blue Leg Poso với sức sống bền bỉ và khả năng chịu đựng tốt, tép này thường được sử dụng để kiểm tra chất lượng nước trong hồ sula nên không yêu cầu quá cao về điều kiện nước và hệ vi sinh, điều này giúp cho người mới không quá áp lực khi quen với các thông số của nước và kiểm ổn định của nước",
          "status": 1
        }
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Đỗ Nguyễn Gia Khang",
            phone: "khangheomap",
            password: "mapheokhang",
            address: '',
            email: 'tepkienggk@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Trần Nhật Sinh",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Phát Admin",
            phone: "9999999999",
            password: "Phat10123.",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();