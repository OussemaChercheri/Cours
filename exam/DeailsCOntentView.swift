import Foundation
import SwiftUI

struct DeatilsContentView: View {
    @State var itemDetail: Film
    var body: some View {
        VStack{

            HStack{
                Text(itemDetail.title).font(.title2)
                spacer()
                VSTack(alignment: .loading){
                    Text("Date release").font(.caption);
                    Text(itemDetail.releasDate)
                }
            }.padding()

            HStack{
                VSTack(alignment: .loading){
                    Text("Director").font(.caption);
                    Text(itemDetail.director)
                }
                VSTack(alignment: .loading){
                    Text("Producer").font(.caption);
                    Text(itemDetail.producer)
                        .lineLimit(1)
                }.padding()
            }
        }.background(.black).foreground(.white).padding(.top,-100)
            HStack{ Text(itemDetail.openingCrawl.replaceingOccrunces(of: "\r\n", with:" "))}
                .font(.caption)
                .frame(width: 400.0)
    }.padding(.top, 10)
}