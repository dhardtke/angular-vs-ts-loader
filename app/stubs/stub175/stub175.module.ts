import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub175Component} from "./stub175.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub175Component
        }])
    ],
    declarations: [
        Stub175Component
    ]
})
export class Stub175Module {

}
