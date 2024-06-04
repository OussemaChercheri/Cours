import Foundation

struct  Film: Cordable, Identifiable {

    var id: Int
    var title: String
    var producer: String
    var director: String
    var releasable: String
    var openingCrawl: String

    private enum CodingKeys: String, CodingKeys {
        case title
        case id = "episode_id"
        case producer
        case director
        case releasable = "release_date"
        case openingCrawl = "opening_Crawl"
    }
}

struct Movie: Cordable {
    var reults: [Film]
}