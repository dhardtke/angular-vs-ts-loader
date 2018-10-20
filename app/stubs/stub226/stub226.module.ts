import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub226Component} from "./stub226.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub226Component
        }])
    ],
    declarations: [
        Stub226Component
    ]
})
export class Stub226Module {

}
