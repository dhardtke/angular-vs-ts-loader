import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub404Component} from "./stub404.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub404Component
        }])
    ],
    declarations: [
        Stub404Component
    ]
})
export class Stub404Module {

}
