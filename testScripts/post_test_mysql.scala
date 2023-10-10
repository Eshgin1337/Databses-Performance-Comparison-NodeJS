package mysqlTest

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class MySQLPostSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("http://localhost:3000")
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0")

  val scn = scenario("PostgreSQL Post Test")
    .feed(csv("usernames-passwords-list.csv"))
    .exec(
      http("AddPost")
        .post("/signup")        
        .formParam("email", "#{email}")
        .formParam("password", "#{password}")
    )

  setUp(scn.inject(
    constantUsersPerSec(500).during(20.seconds)
  ).protocols(httpProtocol))
}