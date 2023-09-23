import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:hacxproject/profile.dart';

class OwnerView extends StatefulWidget {
  @override
  _OwnerViewState createState() => _OwnerViewState();
}

class _OwnerViewState extends State<OwnerView> {
  List<Property> properties = [
    Property(
      name: 'Tanjong Hall #20',
      residentName: 'Rayan Ismal',
      workPermitExpiryDate: '31/03/2024',
    ),
    // Property(
    //   name: 'Binjai Hall #19',
    //   residentName: 'Lee Jun Ke',
    //   workPermitExpiryDate: '31/12/2023',
    // ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
       children: [
         Padding(
           padding: const EdgeInsets.fromLTRB(20.0, 40.0, 14.0, 0.0),
           child: Row(
             children: [
               const Text(
                 "Property List",
                 style: TextStyle(
                 fontSize: 32,
                 fontWeight: FontWeight.bold,
                ),
               ),
               const Spacer(),
               IconButton(
                 icon: const Icon(CupertinoIcons.profile_circled),
                 iconSize: 48,
                 onPressed: () {
                    // go to profile page
                   // Navigate to the homeowner user flow
                   Navigator.push(
                       context,
                       MaterialPageRoute(
                           builder: (context) => ProfilePage(
                               username: 'dev',
                               email: 'email',
                               profileImageUrl: '')));
                 },
               )
              ],
           ),
         ),
         Expanded(
             child: ListView.builder(
               itemCount: properties.length,
               itemBuilder: (context, index) {
                 final property = properties[index];

                 return Column(
                   children: [
                     Padding(
                       padding: const EdgeInsets.symmetric(horizontal: 20.0),
                       child: Row(
                         children: [
                           Text(
                             property.name,
                             style: const TextStyle(
                               fontSize: 24,
                               fontWeight: FontWeight.bold,
                             ),
                           ),
                         ],
                       ),
                     ),
                     // Property name and information
                     const Padding(
                       padding: EdgeInsets.symmetric(horizontal: 20.0),
                       child: Divider(
                         height: 1,
                       ),
                     ),
                     // Resident information
                     SizedBox(height: 20),

                     Card(
                       margin: EdgeInsets.all(0),
                       child: Column(
                         children: [
                           Text(
                             'Resident Information',
                             style: TextStyle(
                               fontSize: 18,
                               fontWeight: FontWeight.bold,
                             ),
                           ),
                           Text(
                             'Name: ${property.residentName}',
                             style: TextStyle(
                               fontSize: 16,
                               fontWeight: FontWeight.normal,
                             ),
                           ),
                           Text(
                             'Work Permit Expiry Date: ${property.workPermitExpiryDate}',
                             style: TextStyle(
                               fontSize: 16,
                               fontWeight: FontWeight.normal,
                             ),
                           ),
                         ],
                       ),
                     )
                   ],
                 );
               },
             ),
         )
       ],
      )
    );
  }
}

class Property {
  final String name;
  final String residentName;
  final String workPermitExpiryDate;

  Property({
    required this.name,
    required this.residentName,
    required this.workPermitExpiryDate,
  });
}