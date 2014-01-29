<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" version="1.0" class="in-text" default-locale="en-US">
  <info>
    <title>Biodiversity Data Journal</title>
    <id>http://www.zotero.org/styles/zookeys</id>
    <link href="http://www.zotero.org/styles/zookeys" rel="self"/>
    <link href="http://www.pensoft.net/journals/zookeys/about/Author%20Guidelines" rel="documentation"/>
    <author>
      <name>Carlos Pena</name>
      <email>mycalesis@gmail.com</email>
    </author>
    <category citation-format="numeric"/>
    <issn>1313-2989</issn>
    <eissn>1313-2970</eissn>
    <updated>2012-12-01T03:03:04+01:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
  </info>
  <citation>
    <layout>
      <text variable="citation-number" prefix="[" suffix="] "/>
    </layout>
  </citation>
  <bibliography>
    <layout>
      <choose>
        <if type="chapter">
          <names variable="author" prefix="" suffix="">
            <name delimiter=", " name-as-sort-order="all" sort-separator=" " form="long" initialize-with=""/>
            <et-al term="et-al"/>
          </names>
          <date variable="issued" prefix="(" suffix=")">
            <date-part name="year" form="long" prefix="" suffix=""/>
          </date>
          <text variable="title" prefix="" suffix="."/>
          <text variable="container-title" prefix="" suffix=" "/>
          <group delimiter=" " prefix="" suffix=". ">
            <group delimiter="" prefix="" suffix="">
              <text variable="volume" prefix="" suffix=""/>
              <text variable="issue" prefix="(" suffix=") "/>
            </group>
            <text variable="page" prefix=" :" suffix="."/>
          </group>
        </if>
        <else>
          <names variable="author" prefix="" suffix=" ">
            <name delimiter=", " name-as-sort-order="all" sort-separator=" " form="long" initialize-with=""/>
			<et-al term="et-al"/>
          </names>
          <date variable="issued" prefix="(" suffix=") ">
            <date-part name="year" form="long" prefix="" suffix=""/>
          </date>
          <text variable="title" prefix="" suffix=". "/>
          <group delimiter="" prefix="" suffix=". ">
            <text variable="container-title" prefix="" suffix="" font-style="italic"/>
            <group delimiter="" prefix="" suffix="">
              <text variable="volume" prefix=" " suffix=""/>
              <text variable="issue" prefix=" (" suffix=")"/>
              <text variable="page" prefix=": " suffix="."/>
              <choose>
                <if variable="DOI">
                  <text variable="DOI" prefix=" doi: "/>
                </if>
              </choose>
            </group>
          </group>
        </else>
      </choose>
    </layout>
  </bibliography>
</style>

