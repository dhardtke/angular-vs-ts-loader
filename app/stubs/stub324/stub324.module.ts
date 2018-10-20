import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub324Component} from "./stub324.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub324Component
        }])
    ],
    declarations: [
        Stub324Component
    ]
})
export class Stub324Module {

}
