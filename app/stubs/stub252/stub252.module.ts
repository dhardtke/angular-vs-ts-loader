import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub252Component} from "./stub252.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub252Component
        }])
    ],
    declarations: [
        Stub252Component
    ]
})
export class Stub252Module {

}
